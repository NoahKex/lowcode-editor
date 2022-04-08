import { MaterialCategory, MaterialGroupSortCategory, MaterialSortCategory } from '@/constants';
import { BasicSection, PropsSection, ConfigureSection, StylesSection } from './componentType';
import { Expand } from './core';
import { SetterConfig } from './setters';

export type CustomPropsSection = Expand<Required<PropsSection>, SetterConfig>;
export type CustomStylesSection = Expand<Required<StylesSection>, SetterConfig>;

export type CustomBasicSection = BasicSection & {
  render: MaterialCategory;
  sort: {
    groupSortCategory: MaterialGroupSortCategory;
    sortCategory: MaterialSortCategory;
  };
};

export type ComponentType = CustomBasicSection & CustomPropsSection & CustomStylesSection & ConfigureSection;

export interface PropFunctionalType {
  userProps: Record<string, any>;
  styleProps: Record<string, any>;
  [k: string]: any;
}
