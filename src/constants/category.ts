/**
 * 组件信息中对于props和styles的区分
 */
export enum ComponentsMessagePropName {
  Styles='styles',
  Props='props',
}

/**
 * 渲染prop信息中对于props和styles的区分
 */
export enum CraftPropsName {
  Styles='styleProps',
  Props='userProps'
}

/**
 * settings配置中对于props和styles的区分
 */
export enum SettingsPropsName {
  Styles='styleSettings',
  Props='attributeSettings'
}

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
   * 页面
   */
  Page,
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

/**
 * 组件排序组种类
 */
export enum MaterialGroupSortCategory {
  /**
   * 基础组件
   */
  Basic = '基础组件',
  /**
   * 自定义组件
   */
  User = '自定义组件',
}

/**
 * 组件排序子类型种类
 */
export enum MaterialSortCategory {
  /**
   * 布局
   */
  Layout = '布局',
  /**
   * 通用
   */
  Common = '通用',
  /**
   * 输入
   */
  Input = '输入',
  /**
   * 信息展示
   */
  InformationExhibition = '信息展示',
  /**
   * 信息反馈
   */
  InformationFeedback = '信息反馈',
}
