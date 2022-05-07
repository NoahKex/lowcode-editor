// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { SwitchComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Switch as MaterialSwitch } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const StyledMaterialSwitch = styled(MaterialSwitch)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Switch = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <StyledMaterialSwitch
      className="material-user"
      userstyles={formatStyleProps(styleProps)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      {...userProps}
    />
  );
};

const SwitchAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={SwitchComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const SwitchStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={SwitchComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Switch.craft = {
  displayName: '开关',
  related: {
    [SettingsPropsName.Props]: SwitchAttributeSettings,
    [SettingsPropsName.Styles]: SwitchStyleSettings,
  },
};

export default Switch;
