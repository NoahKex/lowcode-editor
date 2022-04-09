/* eslint-disable max-lines */
import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from './category';

/**
 * 组件排序组列表
 */
export const MaterialGroupSortCategoryList: MaterialGroupSortCategory[] = [MaterialGroupSortCategory.Basic, MaterialGroupSortCategory.User];
/**
 * 组件排序子类型列表
 */
export const MaterialSortCategoryList: MaterialSortCategory[] = [
  MaterialSortCategory.Layout,
  MaterialSortCategory.Common,
  MaterialSortCategory.Input,
  MaterialSortCategory.InformationExhibition,
  MaterialSortCategory.InformationFeedback,
];

/**
 * 页面
 */
export const PageMessage: ComponentType = {
  componentName: '页面',
  title: '页面',
  description: '承载当前页组件的唯一根元素',
  docUrl: '',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: MaterialCategory.Page,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Layout,
  },
  styles: [
    {
      name: 'flexDirection',
      propType: 'string',
      description: '主轴方向',
      defaultValue: 'row',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'row',
              label: '从左到右',
            },
            {
              value: 'row-reverse',
              label: '从右到左',
            },
            {
              value: 'column',
              label: '从上到下',
            },
            {
              value: 'column-reverse',
              label: '从下到上',
            },
          ],
        },
      },
    },
    {
      name: 'justifyContent',
      propType: 'string',
      description: '主轴对齐',
      defaultValue: 'flex-start',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'flex-start',
              label: '起点对齐',
            },
            {
              value: 'center',
              label: '居中对齐',
            },
            {
              value: 'flex-end',
              label: '终点对齐',
            },
            {
              value: 'space-between',
              label: '两端对齐',
            },
            {
              value: 'space-around',
              label: '均匀分配',
            },
          ],
        },
      },
    },
    {
      name: 'alignItems',
      propType: 'string',
      description: '辅轴对齐',
      defaultValue: 'flex-start',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'flex-start',
              label: '起点对齐',
            },
            {
              value: 'center',
              label: '居中对齐',
            },
            {
              value: 'flex-end',
              label: '终点对齐',
            },
            {
              value: 'stretch',
              label: '拉伸充满',
            },
            {
              value: 'baseline',
              label: '子项第一行文本对齐',
            },
          ],
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
      defaultValue: '#000000',
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
              label: 'justify',
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
        name: SetterCategory.InputNumber,
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
          propertyList: ['X', 'Y', 'Blur', 'Spread'],
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
            description: '自动',
          }, {
            value: 'default',
            description: '箭头',
          },
          {
            value: 'help',
            description: '帮助',
          },
          {
            value: 'pointer',
            description: '可点击',
          },
          {
            value: 'wait',
            description: '等待',
          },
          {
            value: 'crosshair',
            description: '指针',
          },
          {
            value: 'text',
            description: '文本',
          },
          {
            value: 'not-allowed',
            description: '不可选中',
          },
          {
            value: 'zoom-in',
            description: '可放大',
          },
          {
            value: 'zoom-out',
            description: '可缩小',
          }],
        },
      },
    },
  ],
};

/**
 * 布局组件
 */
export const LayoutComponentsMessage: ComponentType = {
  componentName: '容器',
  title: '容器',
  description: '容器是包裹各种元素的载体',
  docUrl: '',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: MaterialCategory.Container,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Layout,
  },
  styles: [
    {
      name: 'height',
      propType: 'string',
      description: '高度',
      defaultValue: '15%',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'width',
      propType: 'string',
      description: '宽度',
      defaultValue: '100%',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'flexDirection',
      propType: 'string',
      description: '主轴方向',
      defaultValue: 'row',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'row',
              label: '从左到右',
            },
            {
              value: 'row-reverse',
              label: '从右到左',
            },
            {
              value: 'column',
              label: '从上到下',
            },
            {
              value: 'column-reverse',
              label: '从下到上',
            },
          ],
        },
      },
    },
    {
      name: 'justifyContent',
      propType: 'string',
      description: '主轴对齐',
      defaultValue: 'flex-start',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'flex-start',
              label: '起点对齐',
            },
            {
              value: 'center',
              label: '居中对齐',
            },
            {
              value: 'flex-end',
              label: '终点对齐',
            },
            {
              value: 'space-between',
              label: '两端对齐',
            },
            {
              value: 'space-around',
              label: '均匀分配',
            },
          ],
        },
      },
    },
    {
      name: 'alignItems',
      propType: 'string',
      description: '辅轴对齐',
      defaultValue: 'flex-start',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: 'flex-start',
              label: '起点对齐',
            },
            {
              value: 'center',
              label: '居中对齐',
            },
            {
              value: 'flex-end',
              label: '终点对齐',
            },
            {
              value: 'stretch',
              label: '拉伸充满',
            },
            {
              value: 'baseline',
              label: '子项第一行文本对齐',
            },
          ],
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
      defaultValue: '#000000',
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
              label: 'justify',
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
        name: SetterCategory.InputNumber,
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
          propertyList: ['X', 'Y', 'Blur', 'Spread'],
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
            description: '自动',
          }, {
            value: 'default',
            description: '箭头',
          },
          {
            value: 'help',
            description: '帮助',
          },
          {
            value: 'pointer',
            description: '可点击',
          },
          {
            value: 'wait',
            description: '等待',
          },
          {
            value: 'crosshair',
            description: '指针',
          },
          {
            value: 'text',
            description: '文本',
          },
          {
            value: 'not-allowed',
            description: '不可选中',
          },
          {
            value: 'zoom-in',
            description: '可放大',
          },
          {
            value: 'zoom-out',
            description: '可缩小',
          }],
        },
      },
    },
  ],
};

/**
 * 按钮组件
 */
export const ButtonComponentsMessage: ComponentType = {
  componentName: '按钮',
  title: '按钮',
  description: '按钮是一种命令组件，可发起一个即时操作',
  docUrl: 'https://arco.design/react/components/button',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: MaterialCategory.Button,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Common,
  },
  props: [
    {
      name: 'children',
      propType: 'string',
      description: '按钮文字',
      defaultValue: '按钮',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
    {
      name: 'type',
      propType: 'string',
      description: '按钮类型',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'default',
            description: '默认',
          }, {
            value: 'primary',
            description: '主要',
          },
          {
            value: 'secondary',
            description: '次要',
          },
          {
            value: 'dashed',
            description: '虚线',
          },
          {
            value: 'text',
            description: '文本',
          }, {
            value: 'outline',
            description: '线性',
          }],
        },
      },
    },
    {
      name: 'status',
      propType: 'string',
      description: '按钮状态',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'default',
            description: '默认',
          }, {
            value: 'warning',
            description: '警告',
          },
          {
            value: 'danger',
            description: '危险',
          },
          {
            value: 'success',
            description: '成功',
          }],
        },
      },
    },
    {
      name: 'size',
      propType: 'string',
      description: '按钮尺寸',
      defaultValue: 'default',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'mini',
            description: '迷你',
          },
          {
            value: 'small',
            description: '小',
          },
          {
            value: 'default',
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
      name: 'shape',
      propType: 'string',
      description: '按钮形状',
      defaultValue: 'square',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'square',
            description: '长方形',
          },
          {
            value: 'circle',
            description: '圆形',
          },
          {
            value: 'round',
            description: '全圆角',
          }],
        },
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
      defaultValue: '4E5969',
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
          propertyList: ['X', 'Y', 'Blur', 'Spread'],
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
      defaultValue: 'pointer',
      setter: {
        name: SetterCategory.Select,
        options: {
          selectOptions: [{
            value: 'auto',
            description: '自动',
          }, {
            value: 'default',
            description: '箭头',
          },
          {
            value: 'help',
            description: '帮助',
          },
          {
            value: 'pointer',
            description: '可点击',
          },
          {
            value: 'wait',
            description: '等待',
          },
          {
            value: 'crosshair',
            description: '指针',
          },
          {
            value: 'text',
            description: '文本',
          },
          {
            value: 'not-allowed',
            description: '不可选中',
          },
          {
            value: 'zoom-in',
            description: '可放大',
          },
          {
            value: 'zoom-out',
            description: '可缩小',
          }],
        },
      },
    },
  ],
};

/**
 * 文本组件
 */
export const TextComponentsMessage: ComponentType = {
  componentName: '文本',
  title: '文本',
  description: '文本即一段文字表达',
  docUrl: '',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: MaterialCategory.Text,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Common,
  },
  props: [
    {
      name: 'children',
      propType: 'string',
      description: '文本内容',
      defaultValue: '一段文字',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
  ],
  styles: [
    {
      name: 'height',
      propType: 'string',
      description: '高度',
      defaultValue: '18px',
      setter: {
        name: SetterCategory.InputNumber,
        options: {
          minNumber: 0,
        },
      },
    },
    {
      name: 'width',
      propType: 'string',
      description: '宽度',
      defaultValue: '100px',
      setter: {
        name: SetterCategory.InputNumber,
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
      defaultValue: '#000000',
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
              label: 'justify',
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
        name: SetterCategory.InputNumber,
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
          propertyList: ['X', 'Y', 'Blur', 'Spread'],
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
      defaultValue: 1,
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
            description: '自动',
          }, {
            value: 'default',
            description: '箭头',
          },
          {
            value: 'help',
            description: '帮助',
          },
          {
            value: 'pointer',
            description: '可点击',
          },
          {
            value: 'wait',
            description: '等待',
          },
          {
            value: 'crosshair',
            description: '指针',
          },
          {
            value: 'text',
            description: '文本',
          },
          {
            value: 'not-allowed',
            description: '不可选中',
          },
          {
            value: 'zoom-in',
            description: '可放大',
          },
          {
            value: 'zoom-out',
            description: '可缩小',
          }],
        },
      },
    },
  ],
};

/**
 * 组件列表
 */
export const ComponentsMessage: ComponentType[] = [LayoutComponentsMessage, ButtonComponentsMessage, TextComponentsMessage];

/**
 * styleProps样式对象转换依赖
 */
export const formatStylePropsRules: [{from: string; to: string}] = [
  {
    from: 'boxShadowColor',
    to: 'boxShadow',
  },
];
