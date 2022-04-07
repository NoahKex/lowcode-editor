import { Slider } from '@arco-design/web-react';

const SliderSetter = ({ value, step, min, max, onChange }) => {
  return (
    <Slider
      value={value}
      step={step}
      min={min}
      max={max}
      onChange={onChange}
    />
  );
};

export default SliderSetter;
