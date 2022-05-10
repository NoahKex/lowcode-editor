/* eslint-disable max-len */
import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Link组件
 */
export const LinkComponentsMessage: ComponentType = {
  componentName: '链接',
  title: '链接',
  description: '引导点击的基本样式',
  docUrl: '',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik0yNC43MDcxIDkuNTY0OTZMOS44NTc4OSAyNC40MTQyQzYuMzQzMTcgMjcuOTI4OSA2LjM0MzE3IDMzLjYyNzQgOS44NTc4OSAzNy4xNDIxVjM3LjE0MjFDMTMuMzcyNiA0MC42NTY4IDE5LjA3MTEgNDAuNjU2OCAyMi41ODU4IDM3LjE0MjFMNDAuMjYzNSAxOS40NjQ1QzQyLjYwNjYgMTcuMTIxMyA0Mi42MDY2IDEzLjMyMjMgNDAuMjYzNSAxMC45NzkyVjEwLjk3OTJDMzcuOTIwMyA4LjYzNjAzIDM0LjEyMTMgOC42MzYwMyAzMS43NzgyIDEwLjk3OTJMMTQuMTAwNSAyOC42NTY4QzEyLjkyOSAyOS44Mjg0IDEyLjkyOSAzMS43Mjc5IDE0LjEwMDUgMzIuODk5NVYzMi44OTk1QzE1LjI3MjEgMzQuMDcxMSAxNy4xNzE2IDM0LjA3MTEgMTguMzQzMiAzMi44OTk1TDMzLjE5MjQgMTguMDUwMiIgc3Ryb2tlPSIjMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
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
      description: '是否显示图标',
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
            label: '默认',
          },
          {
            value: 'error',
            label: '错误',
          },
          {
            value: 'success',
            label: '成功',
          },
          {
            value: 'warning',
            label: '警告',
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
      name: 'hoverable',
      propType: 'any',
      description: '是否显示悬浮态底色',
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
