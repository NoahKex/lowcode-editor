import { useNode } from '@craftjs/core';
import RenderedSetter from '@/components/setter/render';
import { ComponentsMessagePropName, CraftPropsName, SettingsPropsName, TextComponentsMessage } from '@/constants';
import { PropFunctionalType } from '@/types';
import * as S from './styled';
import { formatStyleProps } from '@/utils';

const Text = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <S.TextContainer ref={(ref) => connect(drag(ref as HTMLDivElement))} userStyles={formatStyleProps(styleProps)} {...userProps} />
  );
};

const TextAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={TextComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const TextStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={TextComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Text.craft = {
  displayName: '文本',
  related: {
    [SettingsPropsName.Props]: TextAttributeSettings,
    [SettingsPropsName.Styles]: TextStyleSettings,
  },
};

export default Text;
