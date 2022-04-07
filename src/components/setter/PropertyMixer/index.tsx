import { formatMixedProperty } from '@/utils';
import { Form, Input } from '@arco-design/web-react';
import InputNumberSetter from '../InputNumber';
import * as S from './styled';

const FormItem = Form.Item;

const PropertyMixer = ({ value, propertyList, onChange }) => {
  const valueList = value.split(' ');
  const propertyState = formatMixedProperty(valueList);
  const { top, left, right, bottom } = propertyState;
  return (
    <>
      <Input value={`(${top},${right},${bottom},${left})`} disabled />
      <S.PropertyMixerContainer>
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
      </S.PropertyMixerContainer>
    </>
  );
};

export default PropertyMixer;
