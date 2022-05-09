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
import Link from '@/components/materials/Link';
// import Alert from '@/components/materials/Alert';
import Avatar from '@/components/materials/Avatar';
// import AvatarGroup from '@/components/materials/AvatarGroup';
// import Badge from '@/components/materials/Badge';
// import Breadcrumb from '@/components/materials/Breadcrumb';
// import BreadCrumbItem from '@/components/materials/BreadCrumbItem';
// import ButtonGroup from '@/components/materials/ButtonGroup';
// import Card from '@/components/materials/Card';
// import Carousel from '@/components/materials/Carousel';
// import Cascader from '@/components/materials/Cascader';
import Checkbox from '@/components/materials/Checkbox';
// import CheckboxGroup from '@/components/materials/CheckboxGroup';
// import Collapse from '@/components/materials/Collapse';
// import CollapseItem from '@/components/materials/CollapseItem';
// import DatePicker from '@/components/materials/DatePicker';
// import MonthPicker from '@/components/materials/MonthPicker';
// import YearPicker from '@/components/materials/YearPicker';
// import WeekPicker from '@/components/materials/WeekPicker';
// import QuarterPicker from '@/components/materials/QuarterPicker';
// import RangePicker from '@/components/materials/RangePicker';
// import Descriptions from '@/components/materials/Descriptions';
import Divider from '@/components/materials/Divider';
// import Dropdown from '@/components/materials/Dropdown';
// import DropdownButton from '@/components/materials/DropdownButton';
// import Empty from '@/components/materials/Empty';
import Input from '@/components/materials/Input';
import TextArea from '@/components/materials/TextArea';
// import InputTag from '@/components/materials/InputTag';
import InputNumber from '@/components/materials/InputNumber';
import Radio from '@/components/materials/Radio';
// import RadioGroup from '@/components/materials/RadioGroup';
import Select from '@/components/materials/Select';
import Switch from '@/components/materials/Switch';
import Tag from '@/components/materials/Tag';

const { Header } = Layout;
const { Content } = Layout;
const { Footer } = Layout;

const Home = () => {
  const { render, props, styles } = PageMessage;

  return (
    <Layout style={{ height: '100vh', width: '100vw', minWidth: '1000px' }}>
      <Editor
        resolver={{
          Page,
          Button,
          Container,
          Text,
          Link,
          // Alert,
          Avatar,
          // AvatarGroup,
          // Badge,
          // Breadcrumb,
          // BreadCrumbItem,
          // ButtonGroup,
          // Card,
          // Carousel,
          // Cascader,
          Checkbox,
          // CheckboxGroup,
          // Collapse,
          // CollapseItem,
          // DatePicker,
          // MonthPicker,
          // YearPicker,
          // WeekPicker,
          // QuarterPicker,
          // RangePicker,
          // Descriptions,
          Divider,
          // Dropdown,
          // DropdownButton,
          // Empty,
          Input,
          TextArea,
          // InputTag,
          InputNumber,
          Radio,
          // RadioGroup,
          Select,
          Switch,
          Tag,
        }}
        onRender={RenderNode}
      >
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
