import { Input } from '@arco-design/web-react';

const InputSetter = ({ value, maxLength, onChange }) => {
  return (
    <Input
      value={value}
      maxLength={maxLength}
      allowClear
      placeholder="请输入"
      onChange={onChange}
    />
  );
};

export default InputSetter;
