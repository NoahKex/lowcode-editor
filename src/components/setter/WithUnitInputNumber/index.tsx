import { InputNumber, Select } from '@arco-design/web-react';
import styled from 'styled-components';
import * as S from './styled';

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
   * 是否禁用单位选项
   */
  optionDisabled: boolean;
  /**
   * 选择的回调
   * @param {String} value 新选择的颜色
   */
  onOptionChange: (value: string) => void;
}

const NumberUnitSelect = ({ unit, optionDisabled, onOptionChange }: NumberUnitSelectPropsType) => {
  return (
    <StyledSelect defaultValue={unit} size="mini" arrowIcon={null} onChange={onOptionChange}>
      {['%', 'px'].map((option) => (
        <Option key={option} value={option} disabled={optionDisabled}>
          {option}
        </Option>
      ))}
    </StyledSelect>
  );
};

const WithUnitInputNumberSetter = ({ value, min = -Infinity, max = Infinity, optionDisabled = false, onChange }) => {
  const reg = /(-?[0-9]+)(px|%)/i;
  const [,number, unit] = value.match(reg);
  return (
    <InputNumber
      value={number}
      min={min}
      max={max}
      placeholder="请输入"
      onChange={(val) => {
        const revisedValue = val ?? 0;
        onChange(`${revisedValue}${unit}`);
      }}
      prefix={
        <S.NumberUnitSuffixContainer >
          <NumberUnitSelect
            unit={unit}
            optionDisabled={optionDisabled}
            onOptionChange={(val) => {
              onChange(`${number}${val}`);
            }}
          />
        </S.NumberUnitSuffixContainer>}
    />
  );
};

export default WithUnitInputNumberSetter;
