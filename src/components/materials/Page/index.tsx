import RenderedSetter from '@/components/setter/render';
import { ComponentsMessagePropName, CraftPropsName, PageMessage, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps } from '@/utils';
import { useNode } from '@craftjs/core';
import * as S from './styled';

const Page = ({ userProps, styleProps, children }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <S.PageContainer
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      userStyles={formatStyleProps(styleProps)}
    >
      {children}
    </S.PageContainer>
  );
};

const PageAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={PageMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const PageStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={PageMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Page.craft = {
  displayName: '页面',
  related: {
    [SettingsPropsName.Props]: PageAttributeSettings,
    [SettingsPropsName.Styles]: PageStyleSettings,
  },
};

export default Page;
