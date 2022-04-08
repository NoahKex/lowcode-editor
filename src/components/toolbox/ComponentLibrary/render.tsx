import { MaterialCategory } from '@/constants';
import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import { Element } from '@craftjs/core';
import { PropFunctionalType } from '@/types';
import Page from '@/components/materials/Page';

/**
 * 初始化渲染材料组件
 */
export const renderMaterial = (props: PropFunctionalType, category: MaterialCategory): JSX.Element => {
  const { userProps, styleProps } = props;
  const materialObject: Record<MaterialCategory, () => JSX.Element> = {
    [MaterialCategory.Page]: () => {
      return (
        <Element
          is={Page}
          userProps={userProps}
          styleProps={styleProps}
          canvas
        >
          {null}
        </Element>
      );
    },
    [MaterialCategory.Button]: () => {
      return (
        <Button
          userProps={userProps}
          styleProps={styleProps}
        />
      );
    },
    [MaterialCategory.Container]: () => {
      return (
        <Element
          is={Container}
          userProps={userProps}
          styleProps={styleProps}
          canvas
        >
          {null}
        </Element>
      );
    },
    [MaterialCategory.Text]: () => {
      return (
        <Text
          userProps={userProps}
          styleProps={styleProps}
        />
      );
    },
  };
  return materialObject[category]();
};

