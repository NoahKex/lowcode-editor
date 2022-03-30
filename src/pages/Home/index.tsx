import Setter from '@/components/setter';
import ToolBox from '@/components/toolbox';
import TopBar from '@/components/topbar';
import { Layout } from '@arco-design/web-react';
// import * as S from './styled';

const { Sider } = Layout;
const { Header } = Layout;
const { Content } = Layout;

const Home = () => {
  return (
    <Layout style={{ height: '100vh', width: '100vw' }}>
      <Header>
        <TopBar />
      </Header>
      <Layout>
        <Sider><ToolBox /></Sider>
        <Content>editor</Content>
        <Sider><Setter /></Sider>
      </Layout>
    </Layout>
  );
};

export default Home;
