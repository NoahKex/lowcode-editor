import { Button as MaterialButton, Trigger } from '@arco-design/web-react';
import { IconApps, IconMindMapping } from '@arco-design/web-react/icon';
import styled from 'styled-components';
import * as S from './styled';
import { useState } from 'react';
import ComponentLibraryTool from './ComponentLibrary';
import LayerTreeTool from './LayerTree';

/**
 * 工具箱按钮选择状态
 */
enum ToolButtonClickStatus {
  /**
   * 选择图层树
   */
  LayerTree,
  /**
   * 选择组件库
   */
  ComponentLibrary,
  /**
   * 未选择
   */
  None,
}

const ToolBoxButton = styled(MaterialButton)`
  margin-top: 10px;
`;

const ToolBox = () => {
  const [toolButtonClickStatus, setToolButtonClickStatus] = useState<ToolButtonClickStatus>(ToolButtonClickStatus.None);
  return (
    <S.ToolContainer >
      <Trigger
        unmountOnExit={false}
        popupVisible={toolButtonClickStatus === ToolButtonClickStatus.LayerTree}
        popup={() => <S.ToolItemContainer><LayerTreeTool /></S.ToolItemContainer>}
        trigger="click"
        position="right"
        style={{ position: 'absolute', top: '60px', left: '60px' }}
        onClickOutside={() => setToolButtonClickStatus(ToolButtonClickStatus.None)}
      >
        <ToolBoxButton
          type={toolButtonClickStatus === ToolButtonClickStatus.LayerTree ? 'primary' : 'default'}
          onClick={() => setToolButtonClickStatus(ToolButtonClickStatus.LayerTree)}
          icon={<IconMindMapping />}
        />
      </Trigger>
      <Trigger
        unmountOnExit={false}
        popupVisible={toolButtonClickStatus === ToolButtonClickStatus.ComponentLibrary}
        popup={() => (
          <S.ToolItemContainer>
            <ComponentLibraryTool onMaterialMouseDown={() => setToolButtonClickStatus(ToolButtonClickStatus.None)} />
          </S.ToolItemContainer>)}
        trigger="click"
        position="right"
        style={{ position: 'absolute', top: '60px', left: '60px' }}
        onClickOutside={() => setToolButtonClickStatus(ToolButtonClickStatus.None)}
      >
        <ToolBoxButton
          type={toolButtonClickStatus === ToolButtonClickStatus.ComponentLibrary ? 'primary' : 'default'}
          onClick={() => setToolButtonClickStatus(ToolButtonClickStatus.ComponentLibrary)}
          icon={<IconApps />}
        />
      </Trigger>
    </S.ToolContainer>
  );
};

export default ToolBox;
