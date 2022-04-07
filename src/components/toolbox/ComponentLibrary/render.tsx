import { MaterialCategory } from '@/constants';
import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import { Element } from '@craftjs/core';

/**
 * 初始化渲染材料组件
 */
export const renderMaterial = (props: Record<string, any>, category: MaterialCategory): JSX.Element => {
  const materialObject: Record<MaterialCategory, () => JSX.Element> = {
    [MaterialCategory.Button]: () => {
      return (
        <Button
          type={props.type ?? 'default'}
          status={props.status ?? 'default'}
          size={props.size ?? 'default'}
          shape={props.shape ?? 'square'}
          text={props.text ?? '按钮'}
        />
      );
    },
    [MaterialCategory.Container]: () => {
      return (
        <Element
          is={Container}
          padding={props.padding ?? '5px'}
          background={props.background ?? '#FFFFFF'}
          height={props.height ?? '100%'}
          width={props.width ?? '100%'}
          margin={props.margin ?? '0px'}
          borderWidth={props.borderWidth ?? '0px'}
          borderStyle={props.borderStyle ?? 'none'}
          borderColor={props.borderColor ?? '#000000'}
          boxShadow={props.boxShadow ?? '0px 0px 0px 0px'}
          boxShadowColor={props.boxShadowColor ?? '#000000'}
          opacity={props.opacity ?? 100}
          cursor={props.cursor ?? 'auto'}
          canvas
        >
          {null}
        </Element>
      );
    },
    [MaterialCategory.Text]: () => {
      return (
        <Text text={props.text ?? '一段文字'} fontSize={props.fontSize ?? 16} />
      );
    },
  };
  return materialObject[category]();
};

