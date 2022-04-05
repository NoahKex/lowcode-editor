import ColorPicker from '@/components/custom/ColorPicker';

const ColorPickerSetter = ({ value, onChange }) => {
  return (
    <ColorPicker
      value={value}
      onChange={onChange}
    />
  );
};

export default ColorPickerSetter;
