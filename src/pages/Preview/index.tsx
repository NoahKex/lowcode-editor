import { getSearchParams } from 'ice';
import { Editor, Frame } from '@craftjs/core';
import lz from 'lzutf8';

import Page from '@/components/materials/Page';
import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
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

const Preview = () => {
  const search = getSearchParams();
  const designerData = decodeURIComponent(search['designer_data'] as string);
  return (
    <Editor
      enabled={false}
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
    >
      <Frame data={lz.decompress(lz.decodeBase64(designerData))} />
    </Editor>
  );
};

export default Preview;
