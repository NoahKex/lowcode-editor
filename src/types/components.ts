import { MaterialCategory } from '@/constants';
import { BasicSection, PropsSection, ConfigureSection, StylesSection } from './componentType';
import { Expand } from './core';
import { SetterConfig } from './setters';

export type CustomPropsSection = Expand<Required<PropsSection>, SetterConfig>;
export type CustomStylesSection = Expand<Required<StylesSection>, SetterConfig>;

export type CustomBasicSection = BasicSection & {
  render: MaterialCategory;
};

export type ComponentType = CustomBasicSection & CustomPropsSection & CustomStylesSection & ConfigureSection;
