// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { TagComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Tag as MaterialTag } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';

const StyledMaterialTag = styled(MaterialTag)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Tag = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { icon, childrenText, childrenIcon, ...otherUserProps } = userProps;
  return (
    <StyledMaterialTag
      className="material-user"
      userstyles={formatStyleProps(styleProps)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      {...otherUserProps}
    >
      {cloneDeep(childrenIcon)} {childrenText}
    </StyledMaterialTag>
  );
};

const TagAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={TagComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const TagStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={TagComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Tag.craft = {
  displayName: '标签',
  related: {
    [SettingsPropsName.Props]: TagAttributeSettings,
    [SettingsPropsName.Styles]: TagStyleSettings,
  },
};

export default Tag;
