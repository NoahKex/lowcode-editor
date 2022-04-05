import { Slider } from '@arco-design/web-react';

const SliderSetter = ({ value, onChange }) => {
  return (
    <Slider
      value={value}
      onChange={onChange}
    />
  );
};

export default SliderSetter;
