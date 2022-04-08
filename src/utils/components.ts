import { formatStylePropsRules } from '@/constants';
import { PropsSection, StylesSection } from '@/types';
import { cloneDeep } from 'lodash';

/**
 * 格式化props
 */
export function formatProps({ props, styles }: PropsSection | StylesSection): Record<string, any> {
  const propsValue = props ?? styles;
  const formattedProps = {};
  if (propsValue) {
    for (const item of propsValue) {
      const { name, defaultValue } = item;
      if (defaultValue) {
        formattedProps[name] = defaultValue;
      }
    }
  }
  return cloneDeep(formattedProps);
}

/**
 * 格式化混合属性（padding、margin等）
 */
export function formatMixedProperty(propertyList: string[]): {
  top: string;
  bottom: string;
  left: string;
  right: string;
} {
  const len = propertyList.length;
  switch (len) {
    case 1:
      return {
        top: propertyList[0],
        bottom: propertyList[0],
        left: propertyList[0],
        right: propertyList[0],
      };
    case 2:
      return {
        top: propertyList[0],
        bottom: propertyList[0],
        left: propertyList[1],
        right: propertyList[1],
      };
    case 3:
      return {
        top: propertyList[0],
        bottom: propertyList[2],
        left: propertyList[1],
        right: propertyList[1],
      };
    case 4:
      return {
        top: propertyList[0],
        bottom: propertyList[2],
        left: propertyList[3],
        right: propertyList[1],
      };
    default:
      return {
        top: propertyList[0],
        bottom: propertyList[0],
        left: propertyList[0],
        right: propertyList[0],
      };
  }
}

/**
 * 格式化styleProps样式对象
 */
export function formatStyleProps(props: Record<string, any>): Record<string, any> {
  return formatStylePropsRules.reduce((pre, cur) => {
    const curProps = { ...pre };
    const { from, to } = cur;
    const fromData = pre[from];
    curProps[to] = `${pre[to]} ${fromData}`;
    delete curProps[from];
    return curProps;
  }, props);
}
