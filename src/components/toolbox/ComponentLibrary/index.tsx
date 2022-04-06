import { Divider, Tabs, Button as MaterialButton } from '@arco-design/web-react';
import { useEditor } from '@craftjs/core';
import styled from 'styled-components';
import * as S from './styled';
import { ComponentsMessage } from '@/constants';
import { formatProps } from '@/utils';
import { renderMaterial } from './render';


const { TabPane } = Tabs;

const StyledMaterialButton = styled(MaterialButton)`
  width: 105px;
  margin: 10px 0 0 10px;
  font-size: 12px;
`;

const ComponentLibrary = ({ onMaterialMouseDown }: {onMaterialMouseDown: () => void}) => {
  const { connectors } = useEditor();

  return (
    <S.ComponentLibraryContainer>
      <S.ToolTitle>组件库</S.ToolTitle>
      <Divider />
      <Tabs defaultActiveTab="1" type="rounded" style={{ width: '100%' }} overflow="dropdown">
        <TabPane key="1" title="基础组件">
          {
            ComponentsMessage.map((materialItem) => {
              const { render, props, componentName } = materialItem;
              return (
                <StyledMaterialButton
                  key={componentName}
                  type="dashed"
                  onDragLeave={() => onMaterialMouseDown()}
                  ref={(ref) => connectors.create(ref as HTMLDivElement, renderMaterial(formatProps({ props }), render))}
                ><S.MaterialIcon src="https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image" />
                  {componentName}
                </StyledMaterialButton>
              );
            })
          }
        </TabPane>
        <TabPane key="2" title="自定义组件">
          wip
        </TabPane>
      </Tabs>
    </S.ComponentLibraryContainer>
  );
};

export default ComponentLibrary;
