import { InputNumber, Select } from '@arco-design/web-react';
import styled from 'styled-components';
import * as S from './styled';
import { useState } from 'react';

const StyledSelect = styled(Select)`
  width: 50px;
  top: -3px;
  margin-left: -5px;
`;

const { Option } = Select;

/**
 * 单位选择器 Props
 */
interface NumberUnitSelectPropsType {
  /**
   * 当前单位
   */
  unit: string;
  /**
   * 选择的回调
   * @param {String} value 新选择的颜色
   */
  onOptionChange: (value: string) => void;
}

const NumberUnitSelect = ({ unit, onOptionChange }: NumberUnitSelectPropsType) => {
  return (
    <StyledSelect defaultValue={unit} size="mini" arrowIcon={null} onChange={onOptionChange}>
      {['%', 'px'].map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </StyledSelect>
  );
};

const InputNumberSetter = ({ value, min, onChange }) => {
  const reg = /([0-9]+)(px|%)/i;
  const [,number, unit] = value.match(reg);
  const [numberValue, setNumberValue] = useState<number>(number);
  const [numberUnit, setNumberUnit] = useState<string>(unit);
  return (
    <InputNumber
      value={numberValue}
      min={min ?? 0}
      onChange={(val) => {
        const revisedValue = val ?? 0;
        setNumberValue(revisedValue);
        onChange(revisedValue, numberUnit);
      }}
      prefix={
        <S.NumberUnitSuffixContainer >
          <NumberUnitSelect
            unit={numberUnit}
            onOptionChange={(val) => {
              setNumberUnit(val);
              onChange(numberValue, val);
            }}
          />
        </S.NumberUnitSuffixContainer>}
    />
  );
};

export default InputNumberSetter;
