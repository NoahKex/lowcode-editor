import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * InputNumber组件
 */
export const InputNumberComponentsMessage: ComponentType = {
  componentName: '数字输入框',
  title: '数字输入框',
  description: '仅允许输入数字格式的输入框',
  docUrl: '',
  icon: '',
  render: MaterialCategory.InputNumber,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Input,
  },
  props: [
    {
      name: 'step',
      propType: 'any',
      description: '数字变化步长',
      defaultValue: 1,
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'precision',
      propType: 'any',
      description: '数字精度',
      defaultValue: ' ',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: ' ',
              label: '不设置',
            },
            {
              value: 0,
              label: '整数',
            },
            {
              value: 1,
              label: '一位小数',
            },
            {
              value: 2,
              label: '两位小数',
            },
            {
              value: 3,
              label: '三位小数',
            },
            {
              value: 4,
              label: '四位小数',
            },
          ],
        },
      },
    },
    {
      name: 'min',
      propType: 'any',
      description: '最小值',
      defaultValue: '',
      setter: {
        name: SetterCategory.InputNumber,
      },
    },
    {
      name: 'max',
      propType: 'any',
      description: '最大值',
      defaultValue: '',
      setter: {
        name: SetterCategory.InputNumber,
      },
    },
    {
      name: 'disabled',
      propType: 'any',
      description: '是否禁用',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'error',
      propType: 'any',
      description: '是否是错误状态',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'readOnly',
      propType: 'any',
      description: '是否只读',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'defaultValue',
      propType: 'any',
      description: '初始值',
      defaultValue: '',
      setter: {
        name: SetterCategory.InputNumber,
      },
    },
    {
      name: 'placeholder',
      propType: 'any',
      description: '输入框提示文字',
      defaultValue: '请输入内容',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'mode',
      propType: 'any',
      description: '显示模式',
      defaultValue: 'embed',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'embed',
              label: '按钮内嵌模式',
            },
            {
              value: 'button',
              label: '左右按钮模式',
            },
          ],
        },
      },
    },
    {
      name: 'size',
      propType: 'any',
      description: '输入框的尺寸',
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
      name: 'prefix',
      propType: 'any',
      description: '前缀图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'suffix',
      propType: 'any',
      description: '后缀图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'hideControl',
      propType: 'any',
      description: '是否隐藏操作按钮',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
  ],
  styles: [
    {
      name: 'height',
      propType: 'string',
      description: '高度',
      defaultValue: '30px',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'width',
      propType: 'string',
      description: '宽度',
      defaultValue: '260px',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'textDecoration',
      propType: 'string',
      description: '字体修饰',
      defaultValue: 'none',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'none',
              label: '无',
            },
            {
              value: 'underline',
              label: '下划线',
            },
            {
              value: 'line-through',
              label: '删除线',
            },
          ],
        },
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
      defaultValue: '0px',
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
          propertyList: ['X轴偏移', 'Y轴偏移', '模糊半径', '扩张半径'],
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
          step: 0.01,
          min: 0,
          max: 1,
        },
      },
    },
  ],
};
