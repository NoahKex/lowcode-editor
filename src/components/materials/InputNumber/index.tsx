// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { InputNumberComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { InputNumber as MaterialInputNumber } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const StyledMaterialInputNumber = styled(MaterialInputNumber)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const InputNumber = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { min, max, ...otherUserProps } = userProps;
  if (min) {
    otherUserProps.min = min;
  }
  if (max) {
    otherUserProps.max = max;
  }

  return (
    <div style={{ display: 'inline-block', width: 'auto', height: 'auto' }} ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <StyledMaterialInputNumber
        className="material-user"
        userstyles={formatStyleProps(styleProps)}
        {...otherUserProps}
      />
    </div>
  );
};

const InputNumberAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={InputNumberComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const InputNumberStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={InputNumberComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


InputNumber.craft = {
  displayName: '数字输入框',
  related: {
    [SettingsPropsName.Props]: InputNumberAttributeSettings,
    [SettingsPropsName.Styles]: InputNumberStyleSettings,
  },
};

export default InputNumber;
