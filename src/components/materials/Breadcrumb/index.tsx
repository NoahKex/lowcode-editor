// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { BreadcrumbComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Breadcrumb as MaterialBreadcrumb } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';

const BreadcrumbItem = MaterialBreadcrumb.Item;

const StyledMaterialBreadcrumb = styled(MaterialBreadcrumb)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Breadcrumb = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { options, separatorText, separatorIcon, ...otherUserProps } = userProps;

  return (
    <StyledMaterialBreadcrumb
      className="material-user"
      userstyles={formatStyleProps(styleProps)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      separator={separatorText || cloneDeep(separatorIcon)}
      {...otherUserProps}
    >
      {options.map((item, index) => <BreadcrumbItem key={index}>{item.label}</BreadcrumbItem>)}
    </StyledMaterialBreadcrumb>
  );
};

const BreadcrumbAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={BreadcrumbComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const BreadcrumbStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={BreadcrumbComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Breadcrumb.craft = {
  displayName: '面包屑',
  related: {
    [SettingsPropsName.Props]: BreadcrumbAttributeSettings,
    [SettingsPropsName.Styles]: BreadcrumbStyleSettings,
  },
};

export default Breadcrumb;
