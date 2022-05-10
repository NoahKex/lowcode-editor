// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { RadioComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Radio as MaterialRadio } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const RadioGroup = MaterialRadio.Group;

const StyledMaterialRadio = styled(RadioGroup)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Radio = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { userType, ...otherUserProps } = userProps;

  return (
    <div style={{ display: 'inline-block', width: 'auto', height: 'auto' }} ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <StyledMaterialRadio
        className="material-user"
        userstyles={formatStyleProps(styleProps)}
        type={userType}
        {...otherUserProps}
      />
    </div>
  );
};

const RadioAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={RadioComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const RadioStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={RadioComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Radio.craft = {
  displayName: '单选框',
  related: {
    [SettingsPropsName.Props]: RadioAttributeSettings,
    [SettingsPropsName.Styles]: RadioStyleSettings,
  },
};

export default Radio;
