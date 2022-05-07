import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Avatar组件
 */
export const AvatarComponentsMessage: ComponentType = {
  componentName: '头像',
  title: '头像',
  description: '用作头像显示，可以为图片、图标或字符形式展示',
  docUrl: '',
  icon: '',
  render: MaterialCategory.Avatar,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Common,
  },
  props: [
    {
      name: 'childrenText',
      propType: 'string',
      description: '头像文字',
      defaultValue: 'Xingyun',
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
      description: '头像图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'shape',
      propType: 'any',
      description: '头像形状',
      defaultValue: 'circle',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'circle',
              label: '圆形',
            },
            {
              value: 'square',
              label: '正方形',
            },
          ],
        },
      },
    },
    {
      name: 'size',
      propType: 'any',
      description: '头像尺寸',
      defaultValue: '50px',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
          optionDisabled: true,
        },
      },
    },
    {
      name: 'triggerIcon',
      propType: 'any',
      description: '头像交互图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'triggerType',
      propType: 'any',
      description: '头像交互类型',
      defaultValue: 'button',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'mask',
              label: '遮罩',
            },
            {
              value: 'button',
              label: '按钮',
            },
          ],
        },
      },
    },
  ],
  styles: [
    {
      name: 'background',
      propType: 'string',
      description: '背景色',
      defaultValue: '#3370ff',
      setter: {
        name: SetterCategory.ColorPicker,
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
      defaultValue: '12px',
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
