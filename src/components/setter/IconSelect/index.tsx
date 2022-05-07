import { IconMapping } from '@/constants';
import { Select } from '@arco-design/web-react';

const { Option } = Select;

const IconSelectSetter = ({ value, onChange }) => {
  return (
    <Select
      placeholder="请选择图标"
      defaultValue={value}
      onChange={onChange}
    >
      <Option value={'null'}>
        无图标
      </Option>
      {
        Object.keys(IconMapping).map((item) => (
          <Option key={item} value={item}>
            {IconMapping[item]}{` ${item}`}
          </Option>
        ))
      }
    </Select>
  );
};

export default IconSelectSetter;
