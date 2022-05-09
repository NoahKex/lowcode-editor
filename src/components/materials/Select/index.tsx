// import * as S from './styled';
import RenderedSetter from '@/components/setter/render';
import { SelectComponentsMessage, ComponentsMessagePropName, CraftPropsName, SettingsPropsName } from '@/constants';
import { PropFunctionalType } from '@/types';
import { formatStyleProps, toUnderline } from '@/utils';
import { Select as MaterialSelect } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';

const StyledMaterialSelect = styled(MaterialSelect)<{
  userstyles: Record<string, any>;
}>`
  &.material-user{
    ${(props) => {
    const { userstyles } = props;
    return Object.keys(userstyles).map((item) => `${toUnderline(item)}: ${userstyles[item]};`);
  }};
  }
`;

const Select = ({ userProps, styleProps }: PropFunctionalType) => {
  const { connectors: { connect, drag } } = useNode();
  const { arrowIcon, removeIcon, clearIcon, ...otherUserProps } = userProps;

  return (
    <div style={{ display: 'inline-block', width: 'auto', height: 'auto' }} ref={(ref) => connect(drag(ref as HTMLDivElement))}>
      <StyledMaterialSelect
        className="material-user"
        userstyles={formatStyleProps(styleProps)}
        arrowIcon={cloneDeep(arrowIcon)}
        removeIcon={cloneDeep(removeIcon)}
        clearIcon={cloneDeep(clearIcon)}
        {...otherUserProps}
      />
    </div>
  );
};

const SelectAttributeSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Props]}
      componentsMessage={SelectComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Props}
      craftPropsName={CraftPropsName.Props}
      setProp={setProp}
    />
  );
};

const SelectStyleSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter
      craftProps={props[CraftPropsName.Styles]}
      componentsMessage={SelectComponentsMessage}
      componentsMessagePropName={ComponentsMessagePropName.Styles}
      craftPropsName={CraftPropsName.Styles}
      setProp={setProp}
    />
  );
};


Select.craft = {
  displayName: '选择器',
  related: {
    [SettingsPropsName.Props]: SelectAttributeSettings,
    [SettingsPropsName.Styles]: SelectStyleSettings,
  },
};

export default Select;
