import ColorPicker from '@/components/custom/ColorPicker';
import { Form, InputNumber } from '@arco-design/web-react';
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
        <InputNumber
          mode="button"
          value={props.padding}
          min={0}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.padding = val; });
          }}
        />
      </FormItem>
      <FormItem label="页面背景色">
        <ColorPicker
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
  related: {
    settings: PageSettings,
  },
};

export default Page;
