import { SettingsPropsName } from '@/constants';
import { Tabs } from '@arco-design/web-react';
import { IconBrush, IconEdit, IconRobot } from '@arco-design/web-react/icon';
import { useEditor } from '@craftjs/core';
import React from 'react';
import styled from 'styled-components';
import * as S from './styled';

const { TabPane } = Tabs;

const StyledTabPane = styled(TabPane)`
  padding: 10px 20px 10px 0;
  height: 82vh;
  overflow: scroll;
`;

const Setter = () => {
  const { selected } = useEditor((state, query) => {
    const currentNodeId = [...state.events.selected][0];
    let currentSelected;

    if (currentNodeId) {
      currentSelected = {
        id: currentNodeId,
        name: state.nodes[currentNodeId].data.name,
        related: state.nodes[currentNodeId].related,
        isDeletable: query.node(currentNodeId).isDeletable(),
      };
    }

    return {
      selected: currentSelected,
    };
  });

  return selected ? (
    <Tabs defaultActiveTab="2" style={{ width: '100%' }} >
      <StyledTabPane key="1" title={<span><IconEdit style={{ marginRight: 10 }} />属性</span>}>
        {
          selected.related && React.createElement(selected.related[SettingsPropsName.Props])
        }
      </StyledTabPane>
      <StyledTabPane key="2" title={<span><IconBrush style={{ marginRight: 10 }} />样式</span>}>
        {
          selected.related && React.createElement(selected.related[SettingsPropsName.Styles])
        }
      </StyledTabPane>
      <StyledTabPane key="3" title={<span><IconRobot style={{ marginRight: 10 }} />高级</span>}>
        wip
      </StyledTabPane>
    </Tabs>
  ) : <S.SetterTitle>请先从画布中选择节点</S.SetterTitle>;
};

export default Setter;
