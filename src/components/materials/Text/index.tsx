// import * as S from './styled';
import { useNode } from '@craftjs/core';
import { Form, Input, Slider } from '@arco-design/web-react';

const FormItem = Form.Item;

const Text = ({ text, fontSize }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <p style={{ fontSize }}>{ text }</p>
    </div>
  );
};

const TextSettings = () => {
  const { actions: { setProp }, fontSize, text } = useNode((node) => ({
    fontSize: node.data.props.fontSize,
    text: node.data.props.text,
  }));

  return (
    <Form>
      <FormItem label="文字内容">
        <Input
          value={text}
          maxLength={10}
          allowClear
          placeholder="Please Enter"
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.text = val; });
          }}
        />
      </FormItem>
      <FormItem label="字体大小">
        <Slider
          value={fontSize}
          onChange={(val) => {
            setProp((props) => { props.fontSize = val; });
          }}
        />
      </FormItem>
    </Form>
  );
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
};

export default Text;
