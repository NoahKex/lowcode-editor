/* eslint-disable max-len */
import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Carousel组件
 */
export const CarouselComponentsMessage: ComponentType = {
  componentName: '图片轮播',
  title: '图片轮播',
  description: '展示多张图片的循环播放',
  docUrl: '',
  icon: 'data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz48c3ZnIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDQ4IDQ4IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPjxyZWN0IHdpZHRoPSI0OCIgaGVpZ2h0PSI0OCIgZmlsbD0id2hpdGUiIGZpbGwtb3BhY2l0eT0iMC4wMSIvPjxwYXRoIGQ9Ik00IDExQzQgOS44OTU0MyA0Ljg5NTQzIDkgNiA5SDQyQzQzLjEwNDYgOSA0NCA5Ljg5NTQzIDQ0IDExVjM1QzQ0IDM2LjEwNDYgNDMuMTA0NiAzNyA0MiAzN0g2QzQuODk1NDMgMzcgNCAzNi4xMDQ2IDQgMzVWMTFaIiBmaWxsPSJub25lIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxyZWN0IHg9IjIwIiB5PSIxNyIgd2lkdGg9IjgiIGhlaWdodD0iMTIiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzMzMzMzMyIgc3Ryb2tlLXdpZHRoPSI0IiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQ0IDE3SDM2VjI5SDQ0IiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQgMTdIMTJWMjlINCIgc3Ryb2tlPSIjMzMzMzMzIiBzdHJva2Utd2lkdGg9IjQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPjxwYXRoIGQ9Ik00IDEzVjMzIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PHBhdGggZD0iTTQ0IDEzVjMzIiBzdHJva2U9IiMzMzMzMzMiIHN0cm9rZS13aWR0aD0iNCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+PC9zdmc+',
  render: MaterialCategory.Carousel,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.InformationExhibition,
  },
  props: [
    {
      name: 'imgList',
      propType: 'any',
      description: '图片组配置',
      defaultValue: [
        {
          imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
        },
        {
          imgSrc: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
        },
      ],
      setter: {
        name: SetterCategory.OptionConfig,
        options: {
          materialOptions: {
            imgSrc: {
              name: SetterCategory.Input,
              description: '图片路径',
              defaultValue: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
            },
          },
        },
      },
    },
    {
      name: 'autoPlay',
      propType: 'any',
      description: '是否自动循环展示',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'moveSpeed',
      propType: 'any',
      description: '幻灯片移动速率(单位毫秒)',
      defaultValue: 500,
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'animation',
      propType: 'any',
      description: '动画类型',
      defaultValue: 'slide',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'slide',
              label: '滑动',
            },
            {
              value: 'card',
              label: '卡片化',
            },
            {
              value: 'fade',
              label: '渐隐',
            },
          ],
        },
      },
    },
    {
      name: 'trigger',
      propType: 'any',
      description: '切换触发方式',
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
      name: 'direction',
      propType: 'any',
      description: '幻灯片移动方向',
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
          ],
        },
      },
    },
    {
      name: 'showArrow',
      propType: 'any',
      description: '切换箭头显示时机',
      defaultValue: 'always',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'always',
              label: '总是显示',
            },
            {
              value: 'hover',
              label: '鼠标悬浮时显示',
            },
            {
              value: 'never',
              label: '从不显示',
            },
          ],
        },
      },
    },
    {
      name: 'indicatorType',
      propType: 'any',
      description: '指示器类型',
      defaultValue: 'dot',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'dot',
              label: '圆点',
            },
            {
              value: 'line',
              label: '方块',
            },
            {
              value: 'slider',
              label: '线条',
            },
            {
              value: 'never',
              label: '不显示',
            },
          ],
        },
      },
    },
    {
      name: 'indicatorPosition',
      propType: 'any',
      description: '指示器位置',
      defaultValue: 'bottom',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'bottom',
              label: '底部',
            },
            {
              value: 'top',
              label: '顶部',
            },
            {
              value: 'left',
              label: '左边',
            },
            {
              value: 'right',
              label: '右边',
            },
            {
              value: 'outer',
              label: '外部',
            },
          ],
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
      defaultValue: '500px',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
        options: {
          minNumber: 0,
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
