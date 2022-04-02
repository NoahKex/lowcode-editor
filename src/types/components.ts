import { OriginalComponentType } from './componentType';

export type ComponentType = OriginalComponentType & {
  render: (props: {[k: string]: any}) => JSX.Element;
};
