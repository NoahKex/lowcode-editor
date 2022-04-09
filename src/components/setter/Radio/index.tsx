import { Radio } from '@arco-design/web-react';

const RadioGroup = Radio.Group;

const RadioSetter = ({ value, radioOptions, onChange }) => {
  return (
    <RadioGroup
      options={radioOptions}
      type="button"
      value={value}
      onChange={onChange}
    />
  );
};

export default RadioSetter;
