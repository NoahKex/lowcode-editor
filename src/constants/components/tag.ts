import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Tag组件
 */
export const TagComponentsMessage: ComponentType = {
  componentName: '标签',
  title: '标签',
  description: '用于信息的选择、筛选、分类。用户通过标签进行信息反馈和交互操作',
  docUrl: '',
  icon: '',
  render: MaterialCategory.Tag,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Common,
  },
  props: [
    {
      name: 'childrenText',
      propType: 'string',
      description: '标签文字',
      defaultValue: 'tag',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
    {
      name: 'childrenIcon',
      propType: 'any',
      description: '标签图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'color',
      propType: 'any',
      description: '标签背景颜色',
      defaultValue: '#ffb400',
      setter: {
        name: SetterCategory.ColorPicker,
      },
    },
    {
      name: 'size',
      propType: 'any',
      description: '标签尺寸',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [
            {
              value: 'small',
              description: '小',
            },
            {
              value: 'default',
              description: '默认',
            },
            {
              value: 'medium',
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
      name: 'checkable',
      propType: 'any',
      description: '是否支持选中',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'defaultChecked',
      propType: 'any',
      description: '是否默认选中',
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
      name: 'color',
      propType: 'string',
      description: '字体颜色',
      defaultValue: '#FFFFFF',
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
      name: 'lineHeight',
      propType: 'string',
      description: '行高',
      defaultValue: '18px',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
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
      defaultValue: '1px',
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
