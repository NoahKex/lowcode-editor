import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import Setter from '@/components/setter';
import ToolBox from '@/components/toolbox';
import TopBar from '@/components/topbar';
import { Layout } from '@arco-design/web-react';
import * as S from './styled';
import { Editor, Frame, Element } from '@craftjs/core';

const { Header } = Layout;
const { Content } = Layout;
const { Footer } = Layout;

const Home = () => {
  return (
    <Layout style={{ height: '100vh', width: '100vw', minWidth: '1000px' }}>
      <Editor resolver={{ Button, Container, Text }}>
        <Header>
          <TopBar />
        </Header>
        <Content style={{ display: 'flex' }}>
          <S.ToolArea><ToolBox /></S.ToolArea>
          <S.EditArea>
            <Frame>
              <Element is={Container} padding={5} background="#eee" canvas height={200} width={300}>
                <Text text="fefef" fontSize={20} />
                <Button type="primary" status="danger" size="mini" shape="round" text="1233" />
                <Element is={Container} padding={2} background="#999" canvas height={100} width={150}>
                  <Button type="primary" status="success" size="small" shape="round" text="2233" />
                </Element>
              </Element>
            </Frame>
          </S.EditArea>
          <S.SetArea><Setter /></S.SetArea>
        </Content>
        <Footer>123</Footer>
      </Editor>
    </Layout>
  );
};

export default Home;
