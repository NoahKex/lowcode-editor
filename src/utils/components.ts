import { PropsSection } from '@/types';
import { cloneDeep } from 'lodash';

/**
 * 格式化props
 */
export function formatProps({ props }: PropsSection): Record<string, any> {
  const formattedProps = {};
  if (props) {
    for (const item of props) {
      const { name, defaultValue } = item;
      if (defaultValue) {
        formattedProps[name] = defaultValue;
      }
    }
  }
  return cloneDeep(formattedProps);
}
