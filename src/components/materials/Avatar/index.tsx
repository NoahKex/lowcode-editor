// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { AvatarComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Avatar as MaterialAvatar } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';

const StyledMaterialAvatar = styled(MaterialAvatar)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Avatar = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { triggerIcon, childrenText, childrenIcon, ...otherUserProps } = userProps;
  return (
    <StyledMaterialAvatar
      className="material-user"
      userstyles={formatStyleProps(styleProps)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      triggerIcon={cloneDeep(triggerIcon)}
      {...otherUserProps}
    >{cloneDeep(childrenIcon) || childrenText}
    </StyledMaterialAvatar>
  );
};

const AvatarAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={AvatarComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const AvatarStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={AvatarComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Avatar.craft = {
  displayName: '头像',
  related: {
    [SettingsPropsName.Props]: AvatarAttributeSettings,
    [SettingsPropsName.Styles]: AvatarStyleSettings,
  },
};

export default Avatar;
