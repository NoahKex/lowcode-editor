import { formatMixedProperty } from '@/utils';
import { Collapse, Form } from '@arco-design/web-react';
import { IconMoreVertical } from '@arco-design/web-react/icon';
import InputNumberSetter from '../InputNumber';
import styled from 'styled-components';

const FormItem = Form.Item;
const CollapseItem = Collapse.Item;

const StyledCollapseItem = styled(CollapseItem)`
  .arco-collapse-item-content-box{
    padding: 10px;
  }
  .arco-collapse-item-header-left{
    padding-right: 0;
  }
`;

const PropertyMixer = ({ value, propertyList, description, onChange }) => {
  const valueList = value.split(' ');
  const propertyState = formatMixedProperty(valueList);
  return (
    <Collapse defaultActiveKey="1" bordered={false} style={{ marginLeft: '-80px' }}>
      <StyledCollapseItem
        header={description}
        name="1"
        extra={<IconMoreVertical />}
      >
        {Object.keys(propertyState).map((item, index) => {
          return (
            <FormItem
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              key={item}
              label={propertyList[index]}
              style={{ marginBottom: '5px' }}
            >
              <InputNumberSetter
                value={propertyState[item]}
                onChange={(num, unit) => {
                  const curPropertyState = { ...propertyState, [item]: `${num}${unit}` };
                  const { top: curTop, left: curLeft, right: curRight, bottom: curBottom } = curPropertyState;
                  onChange(`${curTop} ${curRight} ${curBottom} ${curLeft}`);
                }}
              />
            </FormItem>
          );
        })}
      </StyledCollapseItem>
    </Collapse>
  );
};

export default PropertyMixer;
