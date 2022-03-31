import { Button as MaterialButton } from '@arco-design/web-react';
import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import { Element, useEditor } from '@craftjs/core';

const ToolBox = () => {
  const { connectors, query } = useEditor();
  return (
    <>
      <MaterialButton ref={(ref) => connectors.create(ref as HTMLDivElement,
        <Button type="default" status="default" size="default" shape="square" text="按钮" />)}
      >Button
      </MaterialButton>
      <MaterialButton ref={(ref) => connectors.create(ref as HTMLDivElement,
        <Text text="一段文字" fontSize={16} />)}
      >Text
      </MaterialButton>
      <MaterialButton ref={(ref) => connectors.create(ref as HTMLDivElement,
        <Element is={Container} padding={5} background="#eee" height={200} width={200} canvas>
          <Text text="一个布局容器" fontSize={16} />
        </Element>)}
      >Container
      </MaterialButton>
    </>
  );
};

export default ToolBox;
