// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { CardComponentsMessage, ComponentsMessagePropName, CraftPropsName, LayoutComponentsMessage, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatProps, formatStyleProps, toUnderline } from '@/utils';
import { Card as MaterialCard } from '@arco-design/web-react';
import { useNode, Element } from '@craftjs/core';
import styled from 'styled-components';
import Container from '../Container';

const StyledMaterialCard = styled(MaterialCard)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Card = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <StyledMaterialCard
      className="material-user"
      userstyles={formatStyleProps(styleProps)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      {...userProps}
    >
      <Element
        id="material_card_container"
        is={Container}
        userProps={{}}
        styleProps={{ ...formatStyleProps(formatProps({ styles: LayoutComponentsMessage.styles })), height: '70px' }}
        canvas
      >
        {null}
      </Element>
    </StyledMaterialCard>
  );
};

const CardAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={CardComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const CardStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={CardComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Card.craft = {
  displayName: '卡片',
  related: {
    [SettingsPropsName.Props]: CardAttributeSettings,
    [SettingsPropsName.Styles]: CardStyleSettings,
  },
};

export default Card;
