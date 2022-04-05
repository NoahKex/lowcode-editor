import { BasicSection, PropsSection, ConfigureSection } from './componentType';
import { Expand } from './core';
import { SetterConfig } from './setters';

export type CustomPropsSection = Expand<Required<PropsSection>, SetterConfig>;

export type CustomBasicSection = BasicSection & {
  render: (props: Record<string, any>) => JSX.Element;
};

export type ComponentType = CustomBasicSection & CustomPropsSection & ConfigureSection;
