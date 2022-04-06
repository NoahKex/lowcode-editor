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
          selectOptions: ['default', 'primary', 'secondary', 'dashed', 'text', 'outline'],
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
          selectOptions: ['warning', 'danger', 'success', 'default'],
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
          selectOptions: ['mini', 'small', 'default', 'large'],
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
          selectOptions: ['circle', 'round', 'square'],
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
      propType: 'number',
      description: '文本大小',
      defaultValue: 16,
      setter: {
        name: SetterCategory.Slider,
      },
    },
  ],
};

/**
 * 组件列表
 */
export const ComponentsMessage: ComponentType[] = [LayoutComponentsMessage, ButtonComponentsMessage, TextComponentsMessage];
