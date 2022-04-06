import ColorPickerSetter from '@/components/setter/ColorPicker';
import PropertyMixer from '@/components/setter/PropertyMixer';
import { Divider, Form } from '@arco-design/web-react';
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
        <PropertyMixer
          propertyList={['上内边距', '下内边距', '左内边距', '右内边距']}
          value={props.padding}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.padding = val; });
          }}
        />
      </FormItem>
      <Divider style={{ height: '1px', margin: '-10px 0 10px 0' }} />
      <FormItem label="页面背景色">
        <ColorPickerSetter
          value={props.backgroundColor}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.backgroundColor = val; });
          }}
        />
      </FormItem>
      <Divider style={{ height: '1px', margin: '-10px 0 10px 0' }} />
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
