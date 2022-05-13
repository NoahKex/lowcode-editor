/* eslint-disable max-len */
import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Statistic组件
 */
export const StatisticComponentsMessage: ComponentType = {
  componentName: '数值显示',
  title: '数值显示',
  description: '展示数字和带描述的统计类数据',
  docUrl: '',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHg9IjQiIHk9IjYiIHdpZHRoPSI0MCIgaGVpZ2h0PSIzMCIgcng9IjMiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMjQgMzZWNDMiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMzIgMTRMMTYgMjgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48cGF0aCBkPSJNMTAgNDNIMzgiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiLz48Y2lyY2xlIGN4PSIxNSIgY3k9IjE3IiByPSIzIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PGNpcmNsZSBjeD0iMzMiIGN5PSIyNSIgcj0iMyIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
  render: MaterialCategory.Statistic,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.InformationExhibition,
  },
  props: [
    {
      name: 'title',
      propType: 'any',
      description: '数值标题',
      defaultValue: '数值',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'value',
      propType: 'any',
      description: '数值',
      defaultValue: 123456,
      setter: {
        name: SetterCategory.InputNumber,
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
      name: 'groupSeparator',
      propType: 'any',
      description: '是否显示千位分割符',
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
      name: 'suffix',
      propType: 'any',
      description: '后缀图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'extra',
      propType: 'any',
      description: '在数值下展示额外内容',
      defaultValue: '',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'countUp',
      propType: 'any',
      description: '数字是否动态变大',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'countDuration',
      propType: 'any',
      description: '数字动态变大的过渡时间(单位毫秒)',
      defaultValue: 2000,
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    // {
    //   name: 'format',
    //   propType: 'any',
    //   description: '数字的格式化显示(日期时间格式化)',
    //   defaultValue: ' ',
    //   setter: {
    //     name: SetterCategory.Select,
    //     options: {
    //       selectOptions: [
    //         {
    //           value: ' ',
    //           label: '无',
    //         },
    //         {
    //           value: 'YYYY/MM/DD HH:mm:ss',
    //           label: '年/月/日 时:分:秒',
    //         },
    //         {
    //           value: 'YYYY/MM/DD',
    //           label: '年/月/日',
    //         },
    //         {
    //           value: 'h:mm:ss A',
    //           label: '时:分:秒 AM/PM',
    //         },
    //         {
    //           value: 'MMM D, YYYY',
    //           label: '月(英文缩写) 日期, 年',
    //         },
    //       ],
    //     },
    //   },
    // },
    {
      name: 'loading',
      propType: 'any',
      description: '数字是否加载中',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
  ],
  styles: [
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
