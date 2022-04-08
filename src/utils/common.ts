/**
 * 驼峰命名转横线命名
 */
export function toUnderline(str: string) {
  return str.replace(/([A-Z])/g, '-$1').toLowerCase();
}
