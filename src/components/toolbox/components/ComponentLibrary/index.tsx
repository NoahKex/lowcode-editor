import { Divider, Tabs, Button as MaterialButton } from '@arco-design/web-react';
import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import { Element, useEditor } from '@craftjs/core';
import * as S from './styled';


const { TabPane } = Tabs;

const ComponentLibrary = ({ onMaterialMouseDown }: {onMaterialMouseDown: () => void}) => {
  const { connectors } = useEditor();

  return (
    <S.ComponentLibraryContainer>
      <S.ToolTitle>组件库</S.ToolTitle>
      <Divider />
      <Tabs defaultActiveTab="1" type="rounded">
        <TabPane key="1" title="基础组件">
          <MaterialButton
            onDragLeave={() => onMaterialMouseDown()}
            ref={(ref) => connectors.create(ref as HTMLDivElement,
              <Button type="default" status="default" size="default" shape="square" text="按钮" />)}
          >Button
          </MaterialButton>
          <MaterialButton
            onDragLeave={() => onMaterialMouseDown()}
            ref={(ref) => connectors.create(ref as HTMLDivElement,
              <Text text="一段文字" fontSize={16} />)}
          >Text
          </MaterialButton>
          <MaterialButton
            onDragLeave={() => onMaterialMouseDown()}
            ref={(ref) => connectors.create(ref as HTMLDivElement,
              <Element is={Container} padding={5} background="#eee" height={200} width={200} canvas>
                <Text text="一个布局容器" fontSize={16} />
              </Element>)}
          >Container
          </MaterialButton>
        </TabPane>
        <TabPane key="2" title="自定义组件">
          wip
        </TabPane>
      </Tabs>
    </S.ComponentLibraryContainer>
  );
};

export default ComponentLibrary;
