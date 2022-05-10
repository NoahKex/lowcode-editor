import { Select } from '@arco-design/web-react';

const SelectSetter = ({ value, selectOptions, onChange }) => {
  return (
    <Select
      placeholder="请选择"
      defaultValue={value}
      onChange={onChange}
      options={selectOptions}
    />
  );
};

export default SelectSetter;
