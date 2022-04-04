import { useEditor, useNode } from '@craftjs/core';
import { useEffect, useRef } from 'react';
import { ROOT_NODE } from '@craftjs/utils';
import * as S from './styled';
import ReactDOM from 'react-dom';
import { useMemoizedFn } from 'ahooks';
import { IconArrowUp, IconDelete, IconDragArrow } from '@arco-design/web-react/icon';

/**
 * 组件渲染包装器 Props
 */
interface RenderNodePropsType {
  /**
   内部组件元素
   */
  render: React.ReactElement;
}

const currentToolBarBoxHeight = 30;

/**
 * 组件渲染包装器
 */
const RenderNode = ({ render }: RenderNodePropsType) => {
  // 获取当前元素id
  const { id } = useNode();

  const { actions, query, isActive } = useEditor((_, currentQuery) => ({
    isActive: currentQuery.getEvent('selected').contains(id),
  }));

  const {
    isHover,
    renderedMaterialDom,
    name,
    moveable,
    deletable,
    connectors: { drag },
    parent,
  } = useNode((node) => ({
    isHover: node.events.hovered,
    renderedMaterialDom: node.dom,
    name: node.data.custom.displayName || node.data.displayName,
    moveable: query.node(node.id).isDraggable(),
    deletable: query.node(node.id).isDeletable(),
    parent: node.data.parent,
    props: node.data.props,
  }));

  /**
   当前dom根节点
   */
  const root = document.querySelector('#xingyun-lowcode-editor');

  /**
   要生成的dom节点ref
   */
  const currentRef = useRef<HTMLDivElement | null>(null);

  /**
   * 获取生成的操作器的定位
   * @param {HTMLElement} renderedlDom 渲染的材料元素dom
   */
  const getCurrentDomPosition = useMemoizedFn((renderedlDom: HTMLElement) => {
    const { top, left } = renderedlDom.getBoundingClientRect();
    return {
      currentDomTop: top - currentToolBarBoxHeight,
      currentDomLeft: left,
    };
  });

  /**
   * 在页面滚动时保存定位实时跟随
   */
  const handleScrollChange = useMemoizedFn(() => {
    const { current: currentDom } = currentRef;
    if (currentDom && renderedMaterialDom) {
      const { currentDomTop, currentDomLeft } = getCurrentDomPosition(renderedMaterialDom);
      currentDom.style.left = `${currentDomLeft}px`;
      currentDom.style.top = `${currentDomTop}px`;
    }
  });

  /**
   * 为元素添加选中样式，见src/global.css
   */
  useEffect(() => {
    if (renderedMaterialDom) {
      if (isActive || isHover) {
        if (isActive) {
          renderedMaterialDom.classList.remove('component-hovered');
          renderedMaterialDom.classList.add('component-selected');
        } else {
          renderedMaterialDom.classList.remove('component-selected');
          renderedMaterialDom.classList.add('component-hovered');
        }
      } else {
        renderedMaterialDom.classList.remove('component-selected', 'component-hovered');
      }
    }
  }, [renderedMaterialDom, isActive, isHover]);

  useEffect(() => {
    document.addEventListener('scroll', handleScrollChange);
    return () => {
      document.removeEventListener('scroll', handleScrollChange);
    };
  }, [handleScrollChange, root]);

  return (
    <>
      {root && renderedMaterialDom && (isHover || isActive) && ReactDOM.createPortal(
        <S.RenderNodeContainer
          height={currentToolBarBoxHeight}
          ref={currentRef}
          style={{
            top: getCurrentDomPosition(renderedMaterialDom).currentDomTop,
            left: getCurrentDomPosition(renderedMaterialDom).currentDomLeft,
          }}
        >
          <S.RenderNodeNameContainer>{name}</S.RenderNodeNameContainer>

          {moveable &&
          <S.RenderNodeOperateContainer
            ref={drag as any}
            title="移动元素"
          ><IconDragArrow />
          </S.RenderNodeOperateContainer>}

          {id !== ROOT_NODE &&
          <S.RenderNodeOperateContainer
            onClick={() => {
              actions.selectNode(parent);
            }}
            title="前往上一层"
          ><IconArrowUp />
          </S.RenderNodeOperateContainer>}

          {deletable &&
          <S.RenderNodeOperateContainer
            onClick={() => {
              actions.delete(id);
            }}
            style={{ color: '#F53F3F' }}
            title="删除元素"
          ><IconDelete />
          </S.RenderNodeOperateContainer>}

        </S.RenderNodeContainer>, root,
      )}
      { render }
    </>
  );
};

export default RenderNode;
