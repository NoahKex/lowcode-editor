// import styles from './index.module.css';
import { Grid } from '@arco-design/web-react';

const { Row } = Grid;
const { Col } = Grid;

const Container = ({ height, width, background, padding, children }) => {
  return (
    <div style={{ background, padding, height, width }}>
      <Row>
        <Col span={24}>
          {children}
        </Col>
      </Row>
    </div>
  );
};

export default Container;
