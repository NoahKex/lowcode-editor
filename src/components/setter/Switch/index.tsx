import { Switch } from '@arco-design/web-react';

const SwitchSetter = ({ value, onChange }) => {
  return (
    <Switch
      checked={value}
      onChange={onChange}
    />
  );
};

export default SwitchSetter;
