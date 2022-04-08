import RenderedSetter from '@/components/setter/render';
import { ComponentsMessagePropName, CraftPropsName, LayoutComponentsMessage, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps } from '@/utils';
import { Grid } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import * as S from './styled';

const { Row } = Grid;
const { Col } = Grid;

const Container = ({ userProps, styleProps, children }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <S.MaterialContainer
      userStyles={formatStyleProps(styleProps)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
    >
      {children ?
        <Row>
          <Col span={24}>
            {children}
          </Col>
        </Row> :
        <S.BlankContainer >拖拽组件到这里</S.BlankContainer>}
    </S.MaterialContainer>
  );
};

const ContainerAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={LayoutComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const ContainerStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={LayoutComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Container.craft = {
  displayName: '容器',
  related: {
    [SettingsPropsName.Props]: ContainerAttributeSettings,
    [SettingsPropsName.Styles]: ContainerStyleSettings,
  },
};

export default Container;
