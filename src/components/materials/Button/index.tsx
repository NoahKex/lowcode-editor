// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { ButtonComponentsMessage } from '@/constants';
import { Button as MaterialButton } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';

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
    <RenderedSetter craftProps={props} componentsMessage={ButtonComponentsMessage} setProp={setProp} />
  );
};

Button.craft = {
  related: {
    settings: ButtonSettings,
  },
};

export default Button;
