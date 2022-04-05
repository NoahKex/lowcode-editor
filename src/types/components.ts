import { MaterialCategory } from '@/constants';
import { BasicSection, PropsSection, ConfigureSection } from './componentType';
import { Expand } from './core';
import { SetterConfig } from './setters';

export type CustomPropsSection = Expand<Required<PropsSection>, SetterConfig>;

export type CustomBasicSection = BasicSection & {
  render: MaterialCategory;
};

export type ComponentType = CustomBasicSection & CustomPropsSection & ConfigureSection;
