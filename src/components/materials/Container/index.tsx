// import * as S from './styled';
import ColorPicker from '@/components/custom/ColorPicker';
import { Form, Grid, InputNumber } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';

const { Row } = Grid;
const { Col } = Grid;

const FormItem = Form.Item;

const Container = ({ height, width, background, padding, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref as HTMLDivElement))} style={{ background, padding, height, width }}>
      <Row>
        <Col span={24}>
          {children}
        </Col>
      </Row>
    </div>
  );
};


const ContainerSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <FormItem label="容器高度">
        <InputNumber
          mode="button"
          value={props.height}
          min={0}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.height = val; });
          }}
        />
      </FormItem>
      <FormItem label="容器宽度">
        <InputNumber
          mode="button"
          value={props.width}
          min={0}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.width = val; });
          }}
        />
      </FormItem>
      <FormItem label="容器内边距">
        <InputNumber
          mode="button"
          value={props.padding}
          min={0}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.padding = val; });
          }}
        />
      </FormItem>
      <FormItem label="容器背景色">
        <ColorPicker
          value={props.background}
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.background = val; });
          }}
        />
      </FormItem>
    </Form>
  );
};

Container.craft = {
  related: {
    settings: ContainerSettings,
  },
};

export default Container;
