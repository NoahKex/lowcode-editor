import { Button, Divider } from '@arco-design/web-react';
import { useEditor } from '@craftjs/core';
import React from 'react';
import * as S from './styled';

const Setter = () => {
  const { actions, selected } = useEditor((state, query) => {
    const currentNodeId = [...state.events.selected][0];
    let currentSelected;

    if (currentNodeId) {
      currentSelected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        settings: state.nodes[currentNodeId].related && state.nodes[currentNodeId].related.settings,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected: currentSelected,
    };
  });

  return selected ? (
    <>
      <S.SetterTitle>属性设置</S.SetterTitle>
      <Divider />
      {
          selected.settings && React.createElement(selected.settings)
        }
      <br />
      {selected.isDeletable && <Button status="danger" onClick={() => { actions.delete(selected.id); }}>删除组件</Button>}
    </>
  ) : <S.SetterTitle>请先从画布中选择节点</S.SetterTitle>;
};

export default Setter;
