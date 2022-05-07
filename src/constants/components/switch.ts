import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Switch组件
 */
export const SwitchComponentsMessage: ComponentType = {
  componentName: '开关',
  title: '开关',
  description: '互斥性的操作控件，用户可打开或关闭某个功能',
  docUrl: '',
  icon: '',
  render: MaterialCategory.Switch,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Input,
  },
  props: [
    {
      name: 'size',
      propType: 'any',
      description: '开关尺寸',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'small',
              label: '小',
            },
            {
              value: 'default',
              label: '默认',
            },
          ],
        },
      },
    },
    {
      name: 'type',
      propType: 'any',
      description: '开关样式类型',
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
              value: 'round',
              label: '方形',
            },
            {
              value: 'line',
              label: '线形',
            },
          ],
        },
      },
    },
    {
      name: 'checkedText',
      propType: 'any',
      description: '开关打开时的文案(small 尺寸不生效)',
      defaultValue: '',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
    {
      name: 'uncheckedText',
      propType: 'any',
      description: '开关关闭时的文案(small 尺寸不生效)',
      defaultValue: '',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
    {
      name: 'uncheckedIcon',
      propType: 'any',
      description: '开关关闭时，按钮上显示的图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'checkedIcon',
      propType: 'any',
      description: '开关打开时，按钮上显示的图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'defaultChecked',
      propType: 'any',
      description: '默认是否选中',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'loading',
      propType: 'any',
      description: '是否是加载状态',
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
  ],
  styles: [
    // {
    //   name: 'background',
    //   propType: 'string',
    //   description: '背景色',
    //   defaultValue: '#FFFFFF',
    //   setter: {
    //     name: SetterCategory.ColorPicker,
    //   },
    // },
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