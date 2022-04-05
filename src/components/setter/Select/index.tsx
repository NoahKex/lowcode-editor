import { Select } from '@arco-design/web-react';

const { Option } = Select;

const SelectSetter = ({ value, selectOptions, onChange }) => {
  return (
    <Select
      placeholder="请选择"
      defaultValue={value}
      onChange={onChange}
    >
      {selectOptions.map((option) => (
        <Option key={option} value={option}>
          {option}
        </Option>
      ))}
    </Select>
  );
};

export default SelectSetter;
