// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { TimelineComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Timeline as MaterialTimeline } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import styled from 'styled-components';

const TimelineItem = MaterialTimeline.Item;

const StyledMaterialTimeline = styled(MaterialTimeline)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Timeline = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { options, ...otherUserProps } = userProps;

  return (
    <StyledMaterialTimeline
      className="material-user"
      userstyles={formatStyleProps(styleProps)}
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      {...otherUserProps}
    >
      {options.map((item, index) => <TimelineItem key={index} {...item} />)}
    </StyledMaterialTimeline>
  );
};

const TimelineAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={TimelineComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const TimelineStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={TimelineComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Timeline.craft = {
  displayName: '时间轴',
  related: {
    [SettingsPropsName.Props]: TimelineAttributeSettings,
    [SettingsPropsName.Styles]: TimelineStyleSettings,
  },
};

export default Timeline;
