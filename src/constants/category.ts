/**
 * 设置器种类
 */
export enum SetterCategory {
  /**
   * 输入框
   * 详见src/components/setter/Input
   */
  Input,
  /**
   * 数字输入框
   * 详见src/components/setter/InputNumber
   */
  InputNumber,
  /**
   * 颜色选择器
   * 详见src/components/setter/ColorPicker
   */
  ColorPicker,
  /**
   * 选择器
   * 详见src/components/setter/Select
   */
  Select,
  /**
   * 滑动输入条
   * 详见src/components/setter/Slider
   */
  Slider,
  /**
   * 属性混合器（处理margin、padding、border等）
   * 详见src/components/setter/PropertyMixer
   */
  PropertyMixer,
}

/**
 * 材料组件种类
 */
export enum MaterialCategory {
  /**
   * 按钮
   */
  Button,
  /**
   * 容器
   */
  Container,
  /**
   * 文本
   */
  Text,
}
