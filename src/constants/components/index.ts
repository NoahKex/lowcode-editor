import { ComponentType } from '@/types';
import { MaterialGroupSortCategory, MaterialSortCategory } from '@/constants/category';

import { ButtonComponentsMessage } from './button';
import { LayoutComponentsMessage } from './layout';
import { TextComponentsMessage } from './text';
import { LinkComponentsMessage } from './link';
// import { AlertComponentsMessage } from './alert';
import { AvatarComponentsMessage } from './avatar';
// import { AvatarGroupComponentsMessage } from './avatargroup';
// import { BadgeComponentsMessage } from './badge';
// import { BreadcrumbComponentsMessage } from './breadcrumb';
// import { BreadCrumbItemComponentsMessage } from './breadcrumbitem';
// import { ButtonGroupComponentsMessage } from './buttongroup';
import { CardComponentsMessage } from './card';
import { CarouselComponentsMessage } from './carousel';
// import { CascaderComponentsMessage } from './cascader';
import { CheckboxComponentsMessage } from './checkbox';
// import { CheckboxGroupComponentsMessage } from './checkboxgroup';
// import { CollapseComponentsMessage } from './collapse';
// import { CollapseItemComponentsMessage } from './collapseitem';
// import { DatePickerComponentsMessage } from './datepicker';
// import { MonthPickerComponentsMessage } from './monthpicker';
// import { YearPickerComponentsMessage } from './yearpicker';
// import { WeekPickerComponentsMessage } from './weekpicker';
// import { QuarterPickerComponentsMessage } from './quarterpicker';
// import { RangePickerComponentsMessage } from './rangepicker';
import { DescriptionsComponentsMessage } from './descriptions';
import { DividerComponentsMessage } from './divider';
// import { DropdownComponentsMessage } from './dropdown';
// import { DropdownButtonComponentsMessage } from './dropdownbutton';
// import { EmptyComponentsMessage } from './empty';
import { InputComponentsMessage } from './input';
import { TextAreaComponentsMessage } from './textarea';
// import { InputTagComponentsMessage } from './inputtag';
import { InputNumberComponentsMessage } from './inputnumber';
import { RadioComponentsMessage } from './radio';
// import { RadioGroupComponentsMessage } from './radiogroup';
import { SelectComponentsMessage } from './select';
import { SwitchComponentsMessage } from './switch';
import { TagComponentsMessage } from './tag';
import { ResultComponentsMessage } from './result';
import { StatisticComponentsMessage } from './statistic';

export { PageMessage } from './page';
export { ButtonComponentsMessage } from './button';
export { LayoutComponentsMessage } from './layout';
export { TextComponentsMessage } from './text';
export { LinkComponentsMessage } from './link';
// export { AlertComponentsMessage } from './alert';
export { AvatarComponentsMessage } from './avatar';
// export { AvatarGroupComponentsMessage } from './avatargroup';
// export { BadgeComponentsMessage } from './badge';
// export { BreadcrumbComponentsMessage } from './breadcrumb';
// export { BreadCrumbItemComponentsMessage } from './breadcrumbitem';
// export { ButtonGroupComponentsMessage } from './buttongroup';
export { CardComponentsMessage } from './card';
export { CarouselComponentsMessage } from './carousel';
// export { CascaderComponentsMessage } from './cascader';
export { CheckboxComponentsMessage } from './checkbox';
// export { CheckboxGroupComponentsMessage } from './checkboxgroup';
// export { CollapseComponentsMessage } from './collapse';
// export { CollapseItemComponentsMessage } from './collapseitem';
// export { DatePickerComponentsMessage } from './datepicker';
// export { MonthPickerComponentsMessage } from './monthpicker';
// export { YearPickerComponentsMessage } from './yearpicker';
// export { WeekPickerComponentsMessage } from './weekpicker';
// export { QuarterPickerComponentsMessage } from './quarterpicker';
// export { RangePickerComponentsMessage } from './rangepicker';
export { DescriptionsComponentsMessage } from './descriptions';
export { DividerComponentsMessage } from './divider';
// export { DropdownComponentsMessage } from './dropdown';
// export { DropdownButtonComponentsMessage } from './dropdownbutton';
// export { EmptyComponentsMessage } from './empty';
export { InputComponentsMessage } from './input';
export { TextAreaComponentsMessage } from './textarea';
// export { InputTagComponentsMessage } from './inputtag';
export { InputNumberComponentsMessage } from './inputnumber';
export { RadioComponentsMessage } from './radio';
// export { RadioGroupComponentsMessage } from './radiogroup';
export { SelectComponentsMessage } from './select';
export { SwitchComponentsMessage } from './switch';
export { TagComponentsMessage } from './tag';
export { ResultComponentsMessage } from './result';
export { StatisticComponentsMessage } from './statistic';

/**
 * 组件列表
 */
export const ComponentsMessage: ComponentType[] = [
  LayoutComponentsMessage,
  ButtonComponentsMessage,
  TextComponentsMessage,
  LinkComponentsMessage,
  // AlertComponentsMessage,
  AvatarComponentsMessage,
  // AvatarGroupComponentsMessage,
  // BadgeComponentsMessage,
  // BreadcrumbComponentsMessage,
  // BreadCrumbItemComponentsMessage,
  // ButtonGroupComponentsMessage,
  CardComponentsMessage,
  CarouselComponentsMessage,
  // CascaderComponentsMessage,
  CheckboxComponentsMessage,
  // CheckboxGroupComponentsMessage,
  // CollapseComponentsMessage,
  // CollapseItemComponentsMessage,
  // DatePickerComponentsMessage,
  // MonthPickerComponentsMessage,
  // YearPickerComponentsMessage,
  // WeekPickerComponentsMessage,
  // QuarterPickerComponentsMessage,
  // RangePickerComponentsMessage,
  DescriptionsComponentsMessage,
  DividerComponentsMessage,
  // DropdownComponentsMessage,
  // DropdownButtonComponentsMessage,
  // EmptyComponentsMessage,
  InputComponentsMessage,
  TextAreaComponentsMessage,
  // InputTagComponentsMessage,
  InputNumberComponentsMessage,
  RadioComponentsMessage,
  // RadioGroupComponentsMessage,
  SelectComponentsMessage,
  SwitchComponentsMessage,
  TagComponentsMessage,
  ResultComponentsMessage,
  StatisticComponentsMessage,
];

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
