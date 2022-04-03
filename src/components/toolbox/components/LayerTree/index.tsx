import { Divider } from '@arco-design/web-react';
import * as S from './styled';
import { Layers } from '@craftjs/layers';

const LayerTree = () => {
  return (
    <S.LayerTreeContainer>
      <S.ToolTitle>图层树</S.ToolTitle>
      <Divider />
      <Layers expandRootOnLoad />
    </S.LayerTreeContainer>
  );
};

export default LayerTree;
