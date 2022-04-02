import RenderedSetter from '@/components/setter/render';
import { LayoutComponentsMessage } from '@/constants';
import { Grid } from '@arco-design/web-react';
import { useNode } from '@craftjs/core';
import * as S from './styled';

const { Row } = Grid;
const { Col } = Grid;

const Container = ({ height, width, background, padding, children }) => {
  const { connectors: { connect, drag } } = useNode();
  return (
    <S.MaterialContainer ref={(ref) => connect(drag(ref as HTMLDivElement))} height={height} width={width} padding={padding} background={background}>
      <Row>
        <Col span={24}>
          {children}
        </Col>
      </Row>
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
  related: {
    settings: ContainerSettings,
  },
};

export default Container;
