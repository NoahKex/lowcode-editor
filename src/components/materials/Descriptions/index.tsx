// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { DescriptionsComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Descriptions as MaterialDescriptions } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const StyledMaterialDescriptions = styled(MaterialDescriptions)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Descriptions = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <div style={{ display: 'inline-block', width: 'auto', height: 'auto' }} ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <StyledMaterialDescriptions
        className="material-user"
        userstyles={formatStyleProps(styleProps)}
        {...userProps}
      />
    </div>
  );
};

const DescriptionsAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={DescriptionsComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const DescriptionsStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={DescriptionsComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Descriptions.craft = {
  displayName: '描述列表',
  related: {
    [SettingsPropsName.Props]: DescriptionsAttributeSettings,
    [SettingsPropsName.Styles]: DescriptionsStyleSettings,
  },
};

export default Descriptions;
