import { ComponentType } from '@/types';
import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory, SetterCategory } from '@/constants/category';

/**
 * Link组件
 */
export const LinkComponentsMessage: ComponentType = {
  componentName: '链接',
  title: '链接',
  description: '链接的基本样式',
  docUrl: '',
  icon: '',
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
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: true,
              label: '是',
            },
            {
              value: false,
              label: '否',
            },
          ],
        },
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
            description: '默认',
          },
          {
            value: 'error',
            description: '错误',
          },
          {
            value: 'success',
            description: '成功',
          },
          {
            value: 'warning',
            description: '警告',
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
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: true,
              label: '是',
            },
            {
              value: false,
              label: '否',
            },
          ],
        },
      },
    },
    {
      name: 'hoverable',
      propType: 'any',
      description: '悬浮态底色',
      defaultValue: true,
      setter: {
        name: SetterCategory.Radio,
        options: {
          radioOptions: [
            {
              value: true,
              label: '有',
            },
            {
              value: false,
              label: '无',
            },
          ],
        },
      },
    },
  ],
  styles: [],
};
