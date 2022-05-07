import { InputNumber } from '@arco-design/web-react';

const InputNumberSetter = ({ value, min = -Infinity, max = Infinity, onChange }) => {
  return (
    <InputNumber
      value={value}
      min={min}
      max={max}
      placeholder="请输入"
      onChange={onChange}
    />
  );
};

export default InputNumberSetter;
