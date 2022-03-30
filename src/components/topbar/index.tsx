import { Switch, Button } from '@arco-design/web-react';
import * as S from './styled';

const TopBar = () => {
  return (
    <S.TopBarContainer>
      是否编辑<Switch />
      <Button>保存json</Button>
      <Button>导入json</Button>
    </S.TopBarContainer>
  );
};

export default TopBar;
