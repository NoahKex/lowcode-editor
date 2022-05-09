import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * TextArea组件
 */
export const TextAreaComponentsMessage: ComponentType = {
  componentName: '文本域',
  title: '文本域',
  description: '可以用于多行输入',
  docUrl: '',
  icon: '',
  render: MaterialCategory.TextArea,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Input,
  },
  props: [
    {
      name: 'allowClear',
      propType: 'any',
      description: '是否允许清空输入框',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
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
      description: '默认值',
      defaultValue: '',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'autoSize',
      propType: 'any',
      description: '是否自动调整输入框高度',
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
      name: 'placeholder',
      propType: 'any',
      description: '输入框提示文字',
      defaultValue: '请输入内容',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'maxLength',
      propType: 'any',
      description: '最大输入长度',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'showWordLimit',
      propType: 'any',
      description: '是否显示字数统计',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
  ],
  styles: [
    {
      name: 'width',
      propType: 'string',
      description: '宽度',
      defaultValue: '300px',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'fontWeight',
      propType: 'string',
      description: '字体粗细',
      defaultValue: '400',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: '100',
            description: '100 极细',
          }, {
            value: '400',
            description: '400 普通',
          },
          {
            value: 'bold',
            description: '700 加粗',
          },
          {
            value: '900',
            description: '900 黑体',
          }],
        },
      },
    },
    {
      name: 'color',
      propType: 'string',
      description: '字体颜色',
      defaultValue: '#1d2129',
      setter: {
        name: SetterCategory.ColorPicker,
      },
    },
    {
      name: 'fontSize',
      propType: 'string',
      description: '字体大小',
      defaultValue: '14px',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'fontStyle',
      propType: 'string',
      description: '字体样式',
      defaultValue: 'normal',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'normal',
              label: '普通',
            },
            {
              value: 'italic',
              label: '斜体',
            },
          ],
        },
      },
    },
    {
      name: 'textAlign',
      propType: 'string',
      description: '字体对齐',
      defaultValue: 'left',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'left',
              label: '居左',
            },
            {
              value: 'center',
              label: '居中',
            },
            {
              value: 'right',
              label: '居右',
            },
            {
              value: 'justify',
              label: '两侧对齐',
            },
          ],
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
