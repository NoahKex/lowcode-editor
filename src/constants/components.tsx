import { ComponentType } from '@/types';
import { MaterialCategory, SetterCategory } from './category';

/**
 * 布局组件
 */
export const LayoutComponentsMessage: ComponentType = {
  componentName: '容器',
  title: '容器',
  description: '容器是包裹各种元素的载体',
  docUrl: '',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: MaterialCategory.Container,
  props: [
    {
      name: 'height',
      propType: 'string',
      description: '高度',
      defaultValue: '15%',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'width',
      propType: 'string',
      description: '宽度',
      defaultValue: '100%',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'background',
      propType: 'string',
      description: '背景色',
      defaultValue: '#FFFFFF',
      setter: {
        name: SetterCategory.ColorPicker,
      },
    },
    {
      name: 'margin',
      propType: 'string',
      description: '外边距',
      defaultValue: '0px',
      setter: {
        name: SetterCategory.PropertyMixer,
        options: {
          propertyList: ['上外边距', '下外边距', '左外边距', '右外边距'],
        },
      },
    },
    {
      name: 'padding',
      propType: 'string',
      description: '内边距',
      defaultValue: '5px',
      setter: {
        name: SetterCategory.PropertyMixer,
        options: {
          propertyList: ['上内边距', '下内边距', '左内边距', '右内边距'],
        },
      },
    },
    {
      name: 'borderWidth',
      propType: 'string',
      description: '边框',
      defaultValue: '5px',
      setter: {
        name: SetterCategory.PropertyMixer,
        options: {
          propertyList: ['上边框', '下边框', '左边框', '右边框'],
        },
      },
    },
    {
      name: 'borderStyle',
      propType: 'string',
      description: '边框样式',
      defaultValue: 'none',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'none',
            description: '不显示',
          }, {
            value: 'dotted',
            description: '圆点',
          },
          {
            value: 'dashed',
            description: '虚线',
          },
          {
            value: 'solid',
            description: '实线',
          },
          {
            value: 'double',
            description: '双实线',
          },
          {
            value: 'groove',
            description: '雕刻效果',
          },
          {
            value: 'ridge',
            description: '浮雕效果',
          },
          {
            value: 'inset',
            description: '陷入效果',
          },
          {
            value: 'outset',
            description: '突出效果',
          }],
        },
      },
    },
    {
      name: 'borderColor',
      propType: 'string',
      description: '边框颜色',
      defaultValue: '#000000',
      setter: {
        name: SetterCategory.ColorPicker,
      },
    },
    {
      name: 'boxShadow',
      propType: 'string',
      description: '阴影',
      defaultValue: '0px 0px 0px 0px',
      setter: {
        name: SetterCategory.PropertyMixer,
        options: {
          propertyList: ['X', 'Y', 'Blur', 'Spread'],
        },
      },
    },
    {
      name: 'boxShadowColor',
      propType: 'string',
      description: '阴影颜色',
      defaultValue: '#000000',
      setter: {
        name: SetterCategory.ColorPicker,
      },
    },
    {
      name: 'opacity',
      propType: 'number',
      description: '不透明度',
      defaultValue: 100,
      setter: {
        name: SetterCategory.Slider,
        options: {
          step: 1,
          min: 0,
          max: 100,
        },
      },
    },
    {
      name: 'cursor',
      propType: 'string',
      description: '鼠标手势',
      defaultValue: 'auto',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'auto',
            description: '自动',
          }, {
            value: 'default',
            description: '箭头',
          },
          {
            value: 'help',
            description: '帮助',
          },
          {
            value: 'pointer',
            description: '可点击',
          },
          {
            value: 'wait',
            description: '等待',
          },
          {
            value: 'crosshair',
            description: '指针',
          },
          {
            value: 'text',
            description: '文本',
          },
          {
            value: 'not-allowed',
            description: '不可选中',
          },
          {
            value: 'zoom-in',
            description: '可放大',
          },
          {
            value: 'zoom-out',
            description: '可缩小',
          }],
        },
      },
    },
  ],
};

/**
 * 按钮组件
 */
export const ButtonComponentsMessage: ComponentType = {
  componentName: '按钮',
  title: '按钮',
  description: '按钮是一种命令组件，可发起一个即时操作',
  docUrl: 'https://arco.design/react/components/button',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: MaterialCategory.Button,
  props: [
    {
      name: 'text',
      propType: 'string',
      description: '按钮文字',
      defaultValue: '按钮',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
    {
      name: 'type',
      propType: 'string',
      description: '按钮类型',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'default',
            description: '默认',
          }, {
            value: 'primary',
            description: '主要',
          },
          {
            value: 'secondary',
            description: '次要',
          },
          {
            value: 'dashed',
            description: '虚线',
          },
          {
            value: 'text',
            description: '文本',
          }, {
            value: 'outline',
            description: '线性',
          }],
        },
      },
    },
    {
      name: 'status',
      propType: 'string',
      description: '按钮状态',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'default',
            description: '默认',
          }, {
            value: 'warning',
            description: '警告',
          },
          {
            value: 'danger',
            description: '危险',
          },
          {
            value: 'success',
            description: '成功',
          }],
        },
      },
    },
    {
      name: 'size',
      propType: 'string',
      description: '按钮尺寸',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'mini',
            description: '迷你',
          },
          {
            value: 'small',
            description: '小',
          },
          {
            value: 'default',
            description: '中',
          },
          {
            value: 'large',
            description: '大',
          }],
        },
      },
    },
    {
      name: 'shape',
      propType: 'string',
      description: '按钮形状',
      defaultValue: 'square',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'square',
            description: '长方形',
          },
          {
            value: 'circle',
            description: '圆形',
          },
          {
            value: 'round',
            description: '全圆角',
          }],
        },
      },
    },
  ],
};

/**
 * 文本组件
 */
export const TextComponentsMessage: ComponentType = {
  componentName: '文本',
  title: '文本',
  description: '文本即一段文字表达',
  docUrl: '',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: MaterialCategory.Text,
  props: [
    {
      name: 'text',
      propType: 'string',
      description: '文本内容',
      defaultValue: '一段文字',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
    {
      name: 'fontSize',
      propType: 'string',
      description: '文本大小',
      defaultValue: '16px',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
  ],
};

/**
 * 组件列表
 */
export const ComponentsMessage: ComponentType[] = [LayoutComponentsMessage, ButtonComponentsMessage, TextComponentsMessage];
