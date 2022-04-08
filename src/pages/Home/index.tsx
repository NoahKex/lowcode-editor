import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import Setter from '@/components/setter';
import ToolBox from '@/components/toolbox';
import TopBar from '@/components/topbar';
import { Layout } from '@arco-design/web-react';
import * as S from './styled';
import { Editor, Frame } from '@craftjs/core';
import Page from '@/components/materials/Page';
import RenderNode from '@/components/custom/RenderNode';
import { PageMessage } from '@/constants';
import { renderMaterial } from '@/components/toolbox/ComponentLibrary/render';
import { formatProps } from '@/utils';

const { Header } = Layout;
const { Content } = Layout;
const { Footer } = Layout;

const Home = () => {
  const { render, props, styles } = PageMessage;

  return (
    <Layout style={{ height: '100vh', width: '100vw', minWidth: '1000px' }}>
      <Editor resolver={{ Page, Button, Container, Text }} onRender={RenderNode}>
        <Header>
          <TopBar />
        </Header>
        <Content style={{ display: 'flex' }}>
          <S.ToolArea><ToolBox /></S.ToolArea>
          <S.EditArea>
            <Frame>
              {
                renderMaterial({
                  userProps: formatProps({ props }),
                  styleProps: formatProps({ styles }),
                }, render)
              }
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
