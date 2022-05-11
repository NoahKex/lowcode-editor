// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { CarouselComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Carousel as MaterialCarousel } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const StyledMaterialCarousel = styled(MaterialCarousel)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Carousel = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { imgList, ...otherUserProps } = userProps;

  return (
    <div style={{ display: 'inline-block', width: 'auto', height: 'auto' }} ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <StyledMaterialCarousel
        className="material-user"
        userstyles={formatStyleProps(styleProps)}
        {...otherUserProps}
      >
        {imgList.map(({ imgSrc }, index) => (
          <div key={index}>
            <img
              src={imgSrc}
              style={{
                width: '100%',
              }}
            />
          </div>
        ))}
      </StyledMaterialCarousel>
    </div>
  );
};

const CarouselAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={CarouselComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const CarouselStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={CarouselComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Carousel.craft = {
  displayName: '图片轮播',
  related: {
    [SettingsPropsName.Props]: CarouselAttributeSettings,
    [SettingsPropsName.Styles]: CarouselStyleSettings,
  },
};

export default Carousel;
