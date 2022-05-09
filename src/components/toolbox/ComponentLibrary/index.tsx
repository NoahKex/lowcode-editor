import { Divider, Tabs, Card } from '@arco-design/web-react';
import { useEditor } from '@craftjs/core';
import styled from 'styled-components';
import * as S from './styled';
import { ComponentsMessage, MaterialGroupSortCategoryList, MaterialSortCategoryList } from '@/constants';
import { formatProps } from '@/utils';
import { renderMaterial } from './render';
import { IconSort } from '@arco-design/web-react/icon';


const { TabPane } = Tabs;
const { Meta } = Card;

const StyledCard = styled(Card)`
  height: 100px;
  width: 100px;
  margin: 10px 0 0 10px;
  display: inline-block;
  cursor: pointer;
  .arco-card-body{
    padding: 4px;
  }
`;

const ComponentLibrary = ({ onMaterialMouseDown }: {onMaterialMouseDown: () => void}) => {
  const { connectors } = useEditor();

  return (
    <S.ComponentLibraryContainer>
      <S.ToolTitle>组件库</S.ToolTitle>
      <Divider />
      <Tabs defaultActiveTab="1" type="rounded" style={{ width: '100%' }} overflow="dropdown">
        {MaterialGroupSortCategoryList.map((groupCategory, index) => {
          const filteredGroupSortList = ComponentsMessage.filter((item) => item.sort.groupSortCategory === groupCategory);
          return (
            <TabPane key={index + 1} title={groupCategory} style={{ height: '590px', overflowY: 'scroll' }}>
              {
              MaterialSortCategoryList.map((category, i) => {
                const filteredSortList = filteredGroupSortList.filter((item) => item.sort.sortCategory === category);
                return filteredSortList.length > 0 && (
                  (
                    <div key={category}>
                      <S.SortTitle style={{ marginTop: i === 0 ? '-2px' : '10px' }}>{<IconSort />} {category}</S.SortTitle>
                      {
                        filteredSortList.map((materialItem) => {
                          const { render, props, styles, description, icon, componentName } = materialItem;
                          return (
                            <StyledCard
                              key={componentName}
                              onDragLeave={() => onMaterialMouseDown()}
                              ref={(ref) => connectors.create(ref as HTMLDivElement, renderMaterial({
                                userProps: formatProps({ props }),
                                styleProps: formatProps({ styles }),
                              }, render))}
                              hoverable
                              cover={
                                <S.CoverBoxContainer>
                                  <S.MaterialIcon
                                    src={icon}
                                  />
                                </S.CoverBoxContainer>
                              }
                            >
                              <Meta
                                title={<S.ComponentTitle>{componentName}</S.ComponentTitle>}
                                description={<S.ComponentDescription>{description}</S.ComponentDescription>}
                              />
                            </StyledCard>
                          );
                        })
                      }
                    </div>
                  )
                );
              })
            }
            </TabPane>
          );
        })}
      </Tabs>
    </S.ComponentLibraryContainer>
  );
};

export default ComponentLibrary;
