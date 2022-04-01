import { Input, Tooltip } from '@arco-design/web-react';
import { SketchPicker } from 'react-color';
import * as S from './styled';

/**
 * 颜色选择器 Props
 */
interface ColorPickerPropsType {
  /**
   * 当前颜色
   */
  value: string;
  /**
   * 点击按钮的回调
   * @param {String} value 新选择的颜色
   */
  onChange: (value: string) => void;
}

const ColorBox = ({ color }: {color: string}) => {
  return (
    <S.ColorBox currentColor={color} />
  );
};

/**
 * 颜色选择器
 */
const ColorPicker = ({ value, onChange }: ColorPickerPropsType) => {
  return (
    <Tooltip
      trigger="click"
      content={<SketchPicker
        color={value}
        onChange={(val) => {
          onChange(val.hex);
        }}
      />}
      color="#ffffff"
    >
      <Input readOnly addBefore={<ColorBox color={value} />} value={value} />
    </Tooltip>);
};

export default ColorPicker;
