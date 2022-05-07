import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Divider组件
 */
export const DividerComponentsMessage: ComponentType = {
  componentName: '分割线',
  title: '分割线',
  description: '划分内容区域，对模块做分隔',
  docUrl: '',
  icon: '',
  render: MaterialCategory.Divider,
  sort: {
    groupSortCategory: MaterialGroupSortCategory.Basic,
    sortCategory: MaterialSortCategory.Common,
  },
  props: [
    {
      name: 'children',
      propType: 'string',
      description: '分割线文字',
      defaultValue: 'Xingyun',
      setter: {
        name: SetterCategory.Input,
        options: {
          maxLength: 10,
        },
      },
    },
    {
      name: 'type',
      propType: 'any',
      description: '分割线类型',
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
      name: 'orientation',
      propType: 'any',
      description: '分割线文字位置',
      defaultValue: 'center',
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
          ],
        },
      },
    },
  ],
  styles: [
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
