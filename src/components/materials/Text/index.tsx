// import * as S from './styled';
import { useNode } from '@craftjs/core';
import RenderedSetter from '@/components/setter/render';
import { TextComponentsMessage } from '@/constants';

const Text = ({ text, fontSize }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <p style={{ fontSize }}>{ text }</p>
    </div>
  );
};

const TextSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter craftProps={props} componentsMessage={TextComponentsMessage} setProp={setProp} />
  );
};

Text.craft = {
  related: {
    settings: TextSettings,
  },
};

export default Text;
