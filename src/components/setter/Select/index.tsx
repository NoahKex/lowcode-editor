import { Select } from '@arco-design/web-react';

const { Option } = Select;

const SelectSetter = ({ value, selectOptions, onChange }) => {
  return (
    <Select
      placeholder="请选择"
      defaultValue={value}
      onChange={onChange}
    >
      {selectOptions.map(({ value: itemValue, description }) => (
        <Option key={itemValue} value={itemValue}>
          {description}
        </Option>
      ))}
    </Select>
  );
};

export default SelectSetter;
