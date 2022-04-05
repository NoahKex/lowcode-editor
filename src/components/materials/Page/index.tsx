import ColorPickerSetter from '@/components/setter/ColorPicker';
import InputNumberSetter from '@/components/setter/InputNumber';
import { Form } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import * as S from './styled';

const FormItem = Form.Item;

const Page = ({ backgroundColor, padding, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <S.PageContainer ref={(ref) => connect(drag(ref as HTMLDivElement))} padding={padding} backgroundColor={backgroundColor}>
      {children}
    </S.PageContainer>
  );
};


const PageSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <FormItem label="页面内边距">
        <InputNumberSetter
          value={props.padding}
          min={0}
          onChange={(num, unit) => {
            setProp((nodeProps) => { nodeProps.padding = `${num}${unit}`; });
          }}
        />
      </FormItem>
      <FormItem label="页面背景色">
        <ColorPickerSetter
          value={props.backgroundColor}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.backgroundColor = val; });
          }}
        />
      </FormItem>
    </Form>
  );
};

Page.craft = {
  displayName: '页面',
  related: {
    settings: PageSettings,
  },
};

export default Page;
