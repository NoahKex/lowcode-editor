// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { CheckboxComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Checkbox as MaterialCheckbox } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const CheckboxGroup = MaterialCheckbox.Group;

const StyledMaterialCheckbox = styled(CheckboxGroup)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Checkbox = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div style={{ display: 'inline-block', width: 'auto', height: 'auto' }} ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <StyledMaterialCheckbox
        className="material-user"
        userstyles={formatStyleProps(styleProps)}
        {...userProps}
      />
    </div>
  );
};

const CheckboxAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={CheckboxComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const CheckboxStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={CheckboxComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Checkbox.craft = {
  displayName: '复选框',
  related: {
    [SettingsPropsName.Props]: CheckboxAttributeSettings,
    [SettingsPropsName.Styles]: CheckboxStyleSettings,
  },
};

export default Checkbox;
