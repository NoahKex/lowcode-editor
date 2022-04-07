import RenderedSetter from '@/components/setter/render';
import { LayoutComponentsMessage } from '@/constants';
import { Grid } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import * as S from './styled';

const { Row } = Grid;
const { Col } = Grid;

// eslint-disable-next-line max-len
const Container = ({ height, width, background, margin, padding, borderWidth, borderStyle, borderColor, boxShadow, boxShadowColor, opacity, cursor, children }) => {
  const { connectors: { connect, drag } } = useNode();

  return (
    <S.MaterialContainer
      ref={(ref) => connect(drag(ref as HTMLDivElement))}
      height={height}
      width={width}
      margin={margin}
      padding={padding}
      background={background}
      borderWidth={borderWidth}
      borderStyle={borderStyle}
      borderColor={borderColor}
      boxShadow={boxShadow}
      boxShadowColor={boxShadowColor}
      opacity={opacity}
      cursor={cursor}
    >
      {children ?
        <Row>
          <Col span={24}>
            {children}
          </Col>
        </Row> :
        <S.BlankContainer >拖拽组件到这里</S.BlankContainer>}
    </S.MaterialContainer>
  );
};


const ContainerSettings = () => {
  const { actions: { setProp }, props } = useNode((node) => ({
    props: node.data.props,
  }));

  return (
    <RenderedSetter craftProps={props} componentsMessage={LayoutComponentsMessage} setProp={setProp} />
  );
};

Container.craft = {
  displayName: '容器',
  related: {
    settings: ContainerSettings,
  },
};

export default Container;
