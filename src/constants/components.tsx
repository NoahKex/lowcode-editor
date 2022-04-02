import { ComponentType } from '@/types';
import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import { Element } from '@craftjs/core';

/**
 * 布局组件
 */
export const LayoutComponentsMessage: ComponentType = {
  componentName: '栅格布局',
  title: '栅格布局',
  description: '栅格布局通过等分区块，可以有效的保证页面的一致性、逻辑性',
  docUrl: 'https://arco.design/react/components/grid',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: (props) => {
    return (
      <Element
        is={Container}
        padding={props.padding ?? 5}
        background={props.background ?? '#eee'}
        height={props.height ?? 200}
        width={props.width ?? 200}
        canvas
      >
        <Text text="一个布局容器" fontSize={16} />
      </Element>
    );
  },
  props: [
    {
      name: 'height',
      propType: 'number',
      description: '容器高度',
      defaultValue: 100,
    },
    {
      name: 'width',
      propType: 'number',
      description: '容器宽度',
      defaultValue: 100,
    },
    {
      name: 'background',
      propType: 'string',
      description: '容器背景色',
      defaultValue: '#FFFFFF',
    },
    {
      name: 'padding',
      propType: 'number',
      description: '容器内边距',
      defaultValue: 10,
    },
  ],
};

/**
 * 按钮组件
 */
export const ButtonComponentsMessage: ComponentType = {
  componentName: '按钮',
  title: '按钮',
  description: '按钮是一种命令组件，可发起一个即时操作',
  docUrl: 'https://arco.design/react/components/button',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: (props) => {
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
  props: [
    {
      name: 'text',
      propType: 'string',
      description: '按钮文字',
      defaultValue: '按钮',
    },
    {
      name: 'type',
      propType: 'string',
      description: '按钮类型',
      defaultValue: 'default',
    },
    {
      name: 'status',
      propType: 'string',
      description: '按钮状态',
      defaultValue: 'default',
    },
    {
      name: 'size',
      propType: 'string',
      description: '按钮尺寸',
      defaultValue: 'default',
    },
    {
      name: 'shape',
      propType: 'string',
      description: '按钮形状',
      defaultValue: 'square',
    },
  ],
};

/**
 * 文本组件
 */
export const TextComponentsMessage: ComponentType = {
  componentName: '文本',
  title: '文本',
  description: '文本即一段文字表达',
  docUrl: '',
  icon: 'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/7b75627f14234b708d3ad3e064d8bed5~tplv-uwbnlip3yd-image.image',
  render: (props) => {
    return (
      <Text text={props.text ?? '一段文字'} fontSize={props.fontSize ?? 16} />
    );
  },
  props: [
    {
      name: 'text',
      propType: 'string',
      description: '文本内容',
      defaultValue: '一段文字',
    },
    {
      name: 'fontSize',
      propType: 'number',
      description: '文本大小',
      defaultValue: 16,
    },
  ],
};

/**
 * 组件列表
 */
export const ComponentsMessage: ComponentType[] = [LayoutComponentsMessage, ButtonComponentsMessage, TextComponentsMessage];
