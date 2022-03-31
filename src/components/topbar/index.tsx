import { Switch, Button } from '@arco-design/web-react';
import * as S from './styled';
import { useEditor } from '@craftjs/core';

const TopBar = () => {
  const { actions, enabled } = useEditor((state) => ({
    enabled: state.options.enabled,
  }));

  return (
    <S.TopBarContainer>
      是否编辑<Switch
        checked={enabled}
        onChange={(val) => {
          actions.setOptions((options) => { options.enabled = val; });
        }}
      />
      <Button>保存json</Button>
      <Button>导入json</Button>
    </S.TopBarContainer>
  );
};

export default TopBar;
