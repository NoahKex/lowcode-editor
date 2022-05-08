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
   * 带单位数字输入框
   * 详见src/components/setter/WithUnitInputNumber
   */
  WithUnitInputNumber,
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
   * 图标选择器
   * 详见src/components/setter/IconSelect
   */
  IconSelect,
  /**
   * 滑动输入条
   * 详见src/components/setter/Slider
   */
  Slider,
  /**
   * 单选框
   * 详见src/components/setter/Radio
   */
  Radio,
  /**
   * 属性混合器（处理margin、padding、border等）
   * 详见src/components/setter/PropertyMixer
   */
  PropertyMixer,
  /**
   * 开关
   * 详见src/components/setter/Switch
   */
  Switch,
  /**
   * 属性配置
   * 详见src/components/setter/OptionConfig
   */
  OptionConfig,
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
  /**
   * Alert
   */
  Alert,
  /**
   * Avatar
   */
  Avatar,
  /**
   * AvatarGroup
   */
  AvatarGroup,
  /**
   * Badge
   */
  Badge,
  /**
   * Breadcrumb
   */
  Breadcrumb,
  /**
   * BreadCrumbItem
   */
  BreadCrumbItem,
  /**
   * ButtonGroup
   */
  ButtonGroup,
  /**
   * Card
   */
  Card,
  /**
   * Carousel
   */
  Carousel,
  /**
   * Cascader
   */
  Cascader,
  /**
   * Checkbox
   */
  Checkbox,
  /**
   * CheckboxGroup
   */
  CheckboxGroup,
  /**
   * Collapse
   */
  Collapse,
  /**
   * CollapseItem
   */
  CollapseItem,
  /**
   * DatePicker
   */
  DatePicker,
  /**
   * MonthPicker
   */
  MonthPicker,
  /**
   * YearPicker
   */
  YearPicker,
  /**
   * WeekPicker
   */
  WeekPicker,
  /**
   * QuarterPicker
   */
  QuarterPicker,
  /**
   * RangePicker
   */
  RangePicker,
  /**
   * Descriptions
   */
  Descriptions,
  /**
   * Divider
   */
  Divider,
  /**
   * Dropdown
   */
  Dropdown,
  /**
   * DropdownButton
   */
  DropdownButton,
  /**
   * Empty
   */
  Empty,
  /**
   * Input
   */
  Input,
  /**
   * TextArea
   */
  TextArea,
  /**
   * InputTag
   */
  InputTag,
  /**
   * InputNumber
   */
  InputNumber,
  /**
   * Link
   */
  Link,
  /**
   * Radio
   */
  Radio,
  /**
   * RadioGroup
   */
  RadioGroup,
  /**
   * Switch
   */
  Switch,
  /**
   * Tag
   */
  Tag,
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
