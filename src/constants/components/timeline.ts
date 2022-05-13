/* eslint-disable max-len */
import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Timeline组件
 */
export const TimelineComponentsMessage: ComponentType = {
  componentName: '时间轴',
  title: '时间轴',
  description: '按照时间顺序或倒序规则的展示信息内容',
  docUrl: '',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik01LjgxODI0IDYuNzI3MjlWMTRIMTMuMDkxIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQgMjRDNCAzNS4wNDU3IDEyLjk1NDMgNDQgMjQgNDRWNDRDMzUuMDQ1NyA0NCA0NCAzNS4wNDU3IDQ0IDI0QzQ0IDEyLjk1NDMgMzUuMDQ1NyA0IDI0IDRDMTYuNTk4IDQgMTAuMTM1MSA4LjAyMTExIDYuNjc2NzcgMTMuOTk4MSIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik0yNC4wMDUgMTJMMjQuMDAzOCAyNC4wMDg4TDMyLjQ4MzIgMzIuNDg4MiIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjwvc3ZnPg==',
  render: MaterialCategory.Timeline,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.InformationExhibition,
  },
  props: [
    {
      name: 'reverse',
      propType: 'any',
      description: '是否倒序',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'direction',
      propType: 'any',
      description: '时间轴方向',
      defaultValue: 'vertical',
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
          ],
        },
      },
    },
    {
      name: 'mode',
      propType: 'any',
      description: '时间轴展示类型',
      defaultValue: 'left',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'left',
              label: '左侧(垂直方向)',
            },
            {
              value: 'right',
              label: '右侧(垂直方向)',
            },
            {
              value: 'top',
              label: '上方(水平方向)',
            },
            {
              value: 'bottom',
              label: '下方(水平方向)',
            },
            {
              value: 'alternate',
              label: '交替出现',
            },
          ],
        },
      },
    },
    {
      name: 'pending',
      propType: 'any',
      description: '是否展示幽灵节点',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'labelPosition',
      propType: 'any',
      description: '标签文本位置',
      defaultValue: 'same',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'same',
              label: '与显示内容同侧',
            },
            {
              value: 'relative',
              label: '与显示内容异侧',
            },
          ],
        },
      },
    },
    {
      name: 'options',
      propType: 'any',
      description: '时间轴项配置',
      defaultValue: [
        {
          children: '第1个时间轴',
          label: '2022-01-01',
          dotColor: '#165DFF',
          dotType: 'solid',
          lineType: 'solid',
          lineColor: '#e5e6eb',
        },
        {
          children: '第2个时间轴',
          label: '2022-01-02',
          dotColor: '#165DFF',
          dotType: 'solid',
          lineType: 'solid',
          lineColor: '#e5e6eb',
        },
        {
          children: '第3个时间轴',
          label: '2022-01-03',
          dotColor: '#165DFF',
          dotType: 'solid',
          lineType: 'solid',
          lineColor: '#e5e6eb',
        },
      ],
      setter: {
        name: SetterCategory.OptionConfig,
        options: {
          materialOptions: {
            children: {
              name: SetterCategory.Input,
              description: '显示内容',
              defaultValue: '第x个时间轴',
            },
            label: {
              name: SetterCategory.Input,
              description: '标签文本',
              defaultValue: '2022-01-01',
            },
            dotColor: {
              name: SetterCategory.ColorPicker,
              description: '节点颜色',
              defaultValue: '#165DFF',
            },
            dotType: {
              name: SetterCategory.Radio,
              description: '节点类型',
              defaultValue: 'solid',
              options: {
                radioOptions: [
                  {
                    value: 'hollow',
                    label: '空心圆',
                  },
                  {
                    value: 'solid',
                    label: '实心圆',
                  },
                ],
              },
            },
            lineType: {
              name: SetterCategory.Radio,
              description: '时间轴类型',
              defaultValue: 'solid',
              options: {
                radioOptions: [
                  {
                    value: 'solid',
                    label: '实线',
                  },
                  {
                    value: 'dashed',
                    label: '虚线',
                  },
                  {
                    value: 'dotted',
                    label: '点状线',
                  },
                ],
              },
            },
            lineColor: {
              name: SetterCategory.ColorPicker,
              description: '时间轴颜色',
              defaultValue: '#e5e6eb',
            },
          },
        },
      },
    },
  ],
  styles: [
    {
      name: 'height',
      propType: 'string',
      description: '高度',
      defaultValue: '200px',
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
      defaultValue: '400px',
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
    {
      name: 'cursor',
      propType: 'string',
      description: '鼠标手势',
      defaultValue: 'auto',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'auto',
            label: '自动',
          }, {
            value: 'default',
            label: '箭头',
          },
          {
            value: 'help',
            label: '帮助',
          },
          {
            value: 'pointer',
            label: '可点击',
          },
          {
            value: 'wait',
            label: '等待',
          },
          {
            value: 'crosshair',
            label: '指针',
          },
          {
            value: 'text',
            label: '文本',
          },
          {
            value: 'not-allowed',
            label: '不可选中',
          },
          {
            value: 'zoom-in',
            label: '可放大',
          },
          {
            value: 'zoom-out',
            label: '可缩小',
          }],
        },
      },
    },
  ],
};
