import { BasicSection, PropsSection, ConfigureSection } from './componentType';
import { Expand } from './core';
import { SetterOptions } from './setters';

export type CustomPropsSection = Expand<PropsSection, SetterOptions[]>;

export type CustomBasicSection = BasicSection & {
  render: (props: Record<string, any>) => JSX.Element;
};

export type ComponentType = CustomBasicSection & CustomPropsSection & ConfigureSection;
