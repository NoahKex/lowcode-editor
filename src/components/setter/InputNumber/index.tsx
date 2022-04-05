import { InputNumber } from '@arco-design/web-react';

const InputNumberSetter = ({ value, min, onChange }) => {
  return (
    <InputNumber
      value={value}
      min={min ?? 0}
      onChange={onChange}
    />
  );
};

export default InputNumberSetter;
