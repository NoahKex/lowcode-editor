// import * as S from './styled';
import { Button as MaterialButton, Form, Input, Select } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';

const FormItem = Form.Item;
const { Option } = Select;

const typeOptions = ['default', 'primary', 'secondary', 'dashed', 'text', 'outline'];
const statusOptions = ['warning', 'danger', 'success', 'default'];
const sizeOptions = ['mini', 'small', 'default', 'large'];
const shapeOptions = ['circle', 'round', 'square'];

const Button = ({ type, status, size, shape, text }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <MaterialButton ref={(ref) => connect(drag(ref as HTMLDivElement))} type={type} status={status} size={size} shape={shape} >{text}</MaterialButton>
  );
};

const ButtonSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      <FormItem label="按钮文字">
        <Input
          value={props.text}
          maxLength={10}
          allowClear
          placeholder="Please Enter"
          onChange={(val) => {
            setProp((nodeProps) => { nodeProps.text = val; });
          }}
        />
      </FormItem>
      <FormItem label="按钮类型">
        <Select
          placeholder="Please select"
          defaultValue={props.type}
          onChange={(val) => setProp((nodeProps) => { nodeProps.type = val; })}
        >
          {typeOptions.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="按钮状态">
        <Select
          placeholder="Please select"
          defaultValue={props.status}
          onChange={(val) => setProp((nodeProps) => { nodeProps.status = val; })}
        >
          {statusOptions.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="按钮尺寸">
        <Select
          placeholder="Please select"
          defaultValue={props.size}
          onChange={(val) => setProp((nodeProps) => { nodeProps.size = val; })}
        >
          {sizeOptions.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </FormItem>
      <FormItem label="按钮形状">
        <Select
          placeholder="Please select"
          defaultValue={props.shape}
          onChange={(val) => setProp((nodeProps) => { nodeProps.shape = val; })}
        >
          {shapeOptions.map((option) => (
            <Option key={option} value={option}>
              {option}
            </Option>
          ))}
        </Select>
      </FormItem>
    </Form>
  );
};

Button.craft = {
  related: {
    settings: ButtonSettings,
  },
};

export default Button;
