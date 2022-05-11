/* eslint-disable max-len */
import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Descriptions组件
 */
export const DescriptionsComponentsMessage: ComponentType = {
  componentName: '描述列表',
  title: '描述列表',
  description: '一般用于详情页的信息展示',
  docUrl: '',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxwYXRoIGQ9Ik05IDQyQzExLjIwOTEgNDIgMTMgNDAuMjA5MSAxMyAzOEMxMyAzNS43OTA5IDExLjIwOTEgMzQgOSAzNEM2Ljc5MDg2IDM0IDUgMzUuNzkwOSA1IDM4QzUgNDAuMjA5MSA2Ljc5MDg2IDQyIDkgNDJaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik05IDE0QzExLjIwOTEgMTQgMTMgMTIuMjA5MiAxMyAxMEMxMyA3Ljc5MDg2IDExLjIwOTEgNiA5IDZDNi43OTA4NiA2IDUgNy43OTA4NiA1IDEwQzUgMTIuMjA5MiA2Ljc5MDg2IDE0IDkgMTRaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik05IDI4QzExLjIwOTEgMjggMTMgMjYuMjA5MiAxMyAyNEMxMyAyMS43OTA4IDExLjIwOTEgMjAgOSAyMEM2Ljc5MDg2IDIwIDUgMjEuNzkwOCA1IDI0QzUgMjYuMjA5MiA2Ljc5MDg2IDI4IDkgMjhaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMSAyNEg0MyIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMSAzOEg0MyIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yMSAxMEg0MyIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
  render: MaterialCategory.Descriptions,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.InformationExhibition,
  },
  props: [
    {
      name: 'data',
      propType: 'any',
      description: '列表数据项配置',
      defaultValue: [
        {
          label: 'Name',
          value: 'Xingyun',
        },
        {
          label: 'Mobile',
          value: '123-1234-1234',
        },
        {
          label: 'Residence',
          value: 'Beijing',
        },
      ],
      setter: {
        name: SetterCategory.OptionConfig,
        options: {
          materialOptions: {
            label: {
              name: SetterCategory.Input,
              description: '标签',
              defaultValue: 'Label',
            },
            value: {
              name: SetterCategory.Input,
              description: '值',
              defaultValue: 'Value',
            },
          },
        },
      },
    },
    {
      name: 'column',
      propType: 'any',
      description: '一行放置数据列数',
      defaultValue: 3,
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'title',
      propType: 'any',
      description: '标题',
      defaultValue: '一个描述列表',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'colon',
      propType: 'any',
      description: '标签文字后显示的内容',
      defaultValue: ' :',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'border',
      propType: 'any',
      description: '是否显示边框',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'layout',
      propType: 'any',
      description: '排列方式',
      defaultValue: 'horizontal',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'horizontal',
              label: '水平',
            },
            {
              value: 'vertical',
              label: '竖直',
            },
            {
              value: 'inline-horizontal',
              label: '水平(内联)',
            },
            {
              value: 'inline-vertical',
              label: '竖直(内联)',
            },
          ],
        },
      },
    },
    {
      name: 'size',
      propType: 'any',
      description: '描述列表的尺寸',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [
            {
              value: 'default',
              label: '默认',
            },
            {
              value: 'mini',
              label: '迷你',
            },
            {
              value: 'small',
              label: '小',
            },
            {
              value: 'medium',
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
      name: 'tableLayout',
      propType: 'any',
      description: '列表标签与值的位置布局',
      defaultValue: 'auto',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'auto',
              label: '自动',
            },
            {
              value: 'fixed',
              label: '标签与值同宽度',
            },
          ],
        },
      },
    },
  ],
  styles: [
    {
      name: 'width',
      propType: 'string',
      description: '宽度',
      defaultValue: '100%',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
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
