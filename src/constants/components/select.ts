/* eslint-disable max-len */
import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';
import { IconCategory, IconMapping } from '../setter';

/**
 * Select组件
 */
export const SelectComponentsMessage: ComponentType = {
  componentName: '选择器',
  title: '选择器',
  description: '从一组同类数据中选择',
  docUrl: '',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik0zMiAxNkg0MUM0Mi4xMDQ2IDE2IDQzIDE2Ljg5NTQgNDMgMThWNDFDNDMgNDIuMTA0NiA0Mi4xMDQ2IDQzIDQxIDQzSDE4QzE2Ljg5NTQgNDMgMTYgNDIuMTA0NiAxNiA0MVYzMiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMiAxNlY3QzMyIDUuODk1NDMgMzEuMTA0NiA1IDMwIDVIN0M1Ljg5NTQzIDUgNSA1Ljg5NTQzIDUgN1YzMEM1IDMxLjEwNDYgNS44OTU0MyAzMiA3IDMySDE2IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQxIDE2TDE3IDQwIiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTMyIDdMNyAzMiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0zMiAxNkwxNiAzMiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00MyAyNEwyNCA0MyIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNCA1TDUgMjQiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNNDMgMzRMMzQgNDMiIHN0cm9rZT0iIzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTQgNUw1IDE0IiBzdHJva2U9IiMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+',
  render: MaterialCategory.Select,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Input,
  },
  props: [
    {
      name: 'mode',
      propType: 'any',
      description: '选择器模式',
      defaultValue: ' ',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: ' ',
              label: '单选',
            },
            {
              value: 'multiple',
              label: '多选',
            },
          ],
        },
      },
    },
    {
      name: 'options',
      propType: 'any',
      description: '可选项配置',
      defaultValue: [
        {
          label: '选项1',
          value: '1',
          disabled: false,
        },
        {
          label: '选项2',
          value: '2',
          disabled: false,
        },
        {
          label: '选项3',
          value: '3',
          disabled: false,
        },
      ],
      setter: {
        name: SetterCategory.OptionConfig,
        options: {
          materialOptions: {
            label: {
              name: SetterCategory.Input,
              description: '显示值',
              defaultValue: '选项x',
            },
            value: {
              name: SetterCategory.Input,
              description: '实际值',
              defaultValue: 'x',
            },
            disabled: {
              name: SetterCategory.Switch,
              description: '是否禁用',
              defaultValue: false,
            },
          },
        },
      },
    },
    {
      name: 'defaultPopupVisible',
      propType: 'any',
      description: '是否默认打开下拉框',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'trigger',
      propType: 'any',
      description: '下拉框弹出触发方式',
      defaultValue: 'click',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'click',
              label: '鼠标点击',
            },
            {
              value: 'hover',
              label: '鼠标悬浮',
            },
          ],
        },
      },
    },
    {
      name: 'placeholder',
      propType: 'any',
      description: '选择框默认文字',
      defaultValue: '请选择',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'bordered',
      propType: 'any',
      description: '是否需要边框',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'showSearch',
      propType: 'any',
      description: '是否支持搜索（只在单选模式下生效）',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'size',
      propType: 'any',
      description: '选择器尺寸',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'mini',
            label: '迷你',
          },
          {
            value: 'small',
            label: '小',
          },
          {
            value: 'default',
            label: '中',
          },
          {
            value: 'large',
            label: '大',
          }],
        },
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
      description: '是否为错误状态',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'loading',
      propType: 'any',
      description: '是否为加载状态',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'allowClear',
      propType: 'any',
      description: '是否允许清除值',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'allowCreate',
      propType: 'any',
      description: '是否允许通过输入创建新的选项',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
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
      name: 'suffixIcon',
      propType: 'any',
      description: '后缀图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'arrowIcon',
      propType: 'any',
      description: '箭头图标',
      defaultValue: IconMapping[IconCategory.IconDown],
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'removeIcon',
      propType: 'any',
      description: '选中项删除图标（只在多选模式下生效）',
      defaultValue: IconMapping[IconCategory.IconClose],
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'clearIcon',
      propType: 'any',
      description: '清除所有内容按钮图标（只在开启允许清除模式下生效）',
      defaultValue: IconMapping[IconCategory.IconClose],
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
  ],
  styles: [
    {
      name: 'width',
      propType: 'string',
      description: '宽度',
      defaultValue: '200px',
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
            label: '100 极细',
          }, {
            value: '400',
            label: '400 普通',
          },
          {
            value: 'bold',
            label: '700 加粗',
          },
          {
            value: '900',
            label: '900 黑体',
          }],
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
            label: '不显示',
          }, {
            value: 'dotted',
            label: '圆点',
          },
          {
            value: 'dashed',
            label: '虚线',
          },
          {
            value: 'solid',
            label: '实线',
          },
          {
            value: 'double',
            label: '双实线',
          },
          {
            value: 'groove',
            label: '雕刻效果',
          },
          {
            value: 'ridge',
            label: '浮雕效果',
          },
          {
            value: 'inset',
            label: '陷入效果',
          },
          {
            value: 'outset',
            label: '突出效果',
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
