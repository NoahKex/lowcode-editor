import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Select组件
 */
export const SelectComponentsMessage: ComponentType = {
  componentName: '选择器',
  title: '选择器',
  description: '当用户需要从一组同类数据中选择一个或多个时，可以使用下拉选择器，点击后选择对应项',
  docUrl: '',
  icon: '',
  render: MaterialCategory.Select,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Input,
  },
  props: [
    {
      name: 'mode',
      propType: 'any',
      description: '选择器模式',
      defaultValue: ' ',
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: ' ',
              label: '单选',
            },
            {
              value: 'multiple',
              label: '多选',
            },
          ],
        },
      },
    },
    {
      name: 'options',
      propType: 'any',
      description: '可选项配置',
      defaultValue: [
        {
          label: '选项1',
          value: '1',
          disabled: false,
        },
        {
          label: '选项2',
          value: '2',
          disabled: false,
        },
        {
          label: '选项3',
          value: '3',
          disabled: false,
        },
      ],
      setter: {
        name: SetterCategory.OptionConfig,
        options: {
          materialOptions: {
            label: {
              name: SetterCategory.Input,
              description: '显示值',
              defaultValue: '选项x',
              options: {
                maxLength: 10,
              },
            },
            value: {
              name: SetterCategory.Input,
              description: '实际值',
              defaultValue: 'x',
              options: {
                maxLength: 10,
              },
            },
            disabled: {
              name: SetterCategory.Switch,
              description: '是否禁用',
              defaultValue: false,
            },
          },
        },
      },
    },
    {
      name: 'defaultPopupVisible',
      propType: 'any',
      description: '是否默认打开下拉框',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'trigger',
      propType: 'any',
      description: '下拉框弹出触发方式',
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
      name: 'placeholder',
      propType: 'any',
      description: '选择框默认文字',
      defaultValue: '请选择',
      setter: {
        name: SetterCategory.Input,
      },
    },
    {
      name: 'bordered',
      propType: 'any',
      description: '是否需要边框',
      defaultValue: true,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'showSearch',
      propType: 'any',
      description: '是否支持搜索（只在单选模式下生效）',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'size',
      propType: 'any',
      description: '选择器尺寸',
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
      name: 'disabled',
      propType: 'any',
      description: '是否禁用',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'error',
      propType: 'any',
      description: '是否为错误状态',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'loading',
      propType: 'any',
      description: '是否为加载状态',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'allowClear',
      propType: 'any',
      description: '是否允许清除值',
      defaultValue: false,
      setter: {
        name: SetterCategory.Switch,
      },
    },
    {
      name: 'allowCreate',
      propType: 'any',
      description: '是否允许通过输入创建新的选项',
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
      name: 'suffixIcon',
      propType: 'any',
      description: '后缀图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'arrowIcon',
      propType: 'any',
      description: '箭头图标',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'removeIcon',
      propType: 'any',
      description: '选中项删除图标（只在多选模式下生效）',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
    {
      name: 'clearIcon',
      propType: 'any',
      description: '清除所有内容按钮图标（只在开启允许清除模式下生效）',
      defaultValue: null,
      setter: {
        name: SetterCategory.IconSelect,
      },
    },
  ],
  styles: [
    {
      name: 'height',
      propType: 'string',
      description: '高度',
      defaultValue: '30px',
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
      defaultValue: '200px',
      setter: {
        name: SetterCategory.WithUnitInputNumber,
        options: {
          minNumber: 0,
        },
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