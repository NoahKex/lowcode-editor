import { SetterCategory } from '@/constants';
import { Button, Collapse, Trigger } from '@arco-design/web-react';
import { IconDelete, IconEdit, IconMoreVertical, IconPlus } from '@arco-design/web-react/icon';
import { cloneDeep } from 'lodash';
import styled from 'styled-components';
import * as S from './styled';
import TriggerPopup from './TriggerPopup';

const CollapseItem = Collapse.Item;

const StyledCollapseItem = styled(CollapseItem)`
  .arco-collapse-item-content-box{
    padding: 10px;
  }
  .arco-collapse-item-header-left{
    padding-right: 0;
  }
`;

const AddOptionButton = styled(Button)`
  height: 20px;
  width: 100%;
  margin-top: 10px;
  font-size: 12px;
`;

const OperateButton = styled(Button)`
   height: 20px !important;
   width: 20px !important;
   font-size: 12px;
`;

const OptionConfigSetter = ({ value, materialOptions, onChange }) => {
  const typedValue = value as Array<Record<string, any>>;
  const typedMaterialOptions = materialOptions as Record<string, {
    name: SetterCategory;
    description: string;
    defaultValue: any;
    options: Record<string, any>;
  }>;
  return (
    <Collapse defaultActiveKey="1" bordered={false} style={{ marginLeft: '-80px' }}>
      <StyledCollapseItem
        header="选项"
        name="1"
        extra={<IconMoreVertical />}
      >
        {typedValue.map((item, index) => (
          <S.OptionItemContainer key={index}>
            <Trigger
              popup={() => (
                <TriggerPopup
                  value={item}
                  materialOptions={materialOptions}
                  valueOnChange={(property, newValue) => {
                    const copyValue = cloneDeep(typedValue);
                    copyValue[index][property] = newValue;
                    onChange(copyValue);
                  }}
                />)}
              trigger="click"
              position="right"
              showArrow
              arrowProps={{
                style: { background: '#DFDFDF' },
              }}
              popupAlign={{ left: 40 }}
            >
              <OperateButton type="text" icon={<IconEdit />} />
            </Trigger>
            项目{index + 1}
            <OperateButton
              status="danger"
              type="text"
              icon={<IconDelete />}
              onClick={() => {
                const copyValue = cloneDeep(typedValue);
                copyValue.splice(index, 1);
                onChange(copyValue);
              }}
            />
          </S.OptionItemContainer>
        ))}
        <AddOptionButton
          icon={<IconPlus />}
          type="outline"
          onClick={() => {
            const defaultValue = Object.keys(typedMaterialOptions).reduce((pre, cur) => {
              pre[cur] = typedMaterialOptions[cur].defaultValue;
              return pre;
            // eslint-disable-next-line @typescript-eslint/consistent-type-assertions
            }, {} as Record<string, any>);
            const copyValue = cloneDeep(typedValue);
            copyValue.push(defaultValue);
            onChange(copyValue);
          }}
        >新增一项
        </AddOptionButton>
      </StyledCollapseItem>
    </Collapse>
  );
};

export default OptionConfigSetter;
