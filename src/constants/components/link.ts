import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Link组件
 */
export const LinkComponentsMessage: ComponentType = {
  componentName: '链接',
  title: '链接',
  description: '链接的基本样式',
  docUrl: '',
  icon: '',
  render: MaterialCategory.Link,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Common,
  },
  props: [
    {
      name: 'children',
      propType: 'string',
      description: '链接文字',
      defaultValue: '链接',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 20,
        },
      },
    },
    {
      name: 'icon',
      propType: 'any',
      description: '显示图标',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'status',
      propType: 'any',
      description: '链接状态',
      defaultValue: ' ',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: ' ',
            description: '默认',
          },
          {
            value: 'error',
            description: '错误',
          },
          {
            value: 'success',
            description: '成功',
          },
          {
            value: 'warning',
            description: '警告',
          }],
        },
      },
    },
    {
      name: 'disabled',
      propType: 'any',
      description: '禁用',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'hoverable',
      propType: 'any',
      description: '显示悬浮态底色',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
  ],
  styles: [
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
      name: 'fontSize',
      propType: 'string',
      description: '字体大小',
      defaultValue: '14px',
      setter: {
        name: SetterCategory.InputNumber,
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
      name: 'lineHeight',
      propType: 'string',
      description: '行高',
      defaultValue: '18px',
      setter: {
        name: SetterCategory.InputNumber,
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
