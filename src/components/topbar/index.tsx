import { Switch, Button } from '@arco-design/web-react';
import * as S from './styled';
import { useEditor } from '@craftjs/core';
import { IconRedo, IconUndo } from '@arco-design/web-react/icon';

const TopBar = () => {
  const { actions, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <S.TopBarContainer>
      {/* 是否编辑<Switch
        checked={enabled}
        onChange={(val) => {
          actions.setOptions((options) => { options.enabled = val; });
        }}
      />
      <Button>保存json</Button>
      <Button>导入json</Button> */}
      <S.LogoContainer >
        <S.Logo src="src/assets/logo.png" />
        <S.Title>行云低代码设计器</S.Title>
      </S.LogoContainer>
      <S.HistoryContainer >
        <Button type="secondary" icon={<IconUndo />} />
        <Button type="secondary" icon={<IconRedo />} />
      </S.HistoryContainer>
      <S.OperationContainer >
        <Button type="primary" style={{ marginRight: '10px' }}>保存</Button>
        <Button type="primary" style={{ marginRight: '5px' }}>预览</Button>
        <Button style={{ marginRight: '5px' }}>导入数据</Button>
      </S.OperationContainer>
    </S.TopBarContainer>
  );
};

export default TopBar;
