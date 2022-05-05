import { ComponentType } from '@/types';
import { MaterialGroupSortCategory, MaterialSortCategory } from '@/constants/category';

import { ButtonComponentsMessage } from './button';
import { LayoutComponentsMessage } from './layout';
import { TextComponentsMessage } from './text';

export { PageMessage } from './page';
export { ButtonComponentsMessage } from './button';
export { LayoutComponentsMessage } from './layout';
export { TextComponentsMessage } from './text';

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
