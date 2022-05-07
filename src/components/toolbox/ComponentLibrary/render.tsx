import { MaterialCategory } from '@/constants';
import Button from '@/components/materials/Button';
import Container from '@/components/materials/Container';
import Text from '@/components/materials/Text';
import { Element } from '@craftjs/core';
import { PropFunctionalType } from '@/types';
import Page from '@/components/materials/Page';
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
// import Checkbox from '@/components/materials/Checkbox';
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
// import Input from '@/components/materials/Input';
// import TextArea from '@/components/materials/TextArea';
// import InputTag from '@/components/materials/InputTag';
// import InputNumber from '@/components/materials/InputNumber';
// import Radio from '@/components/materials/Radio';
// import RadioGroup from '@/components/materials/RadioGroup';
// import Switch from '@/components/materials/Switch';
import Tag from '@/components/materials/Tag';

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
    [MaterialCategory.Link]: () => {
      return (
        <Link
          userProps={userProps}
          styleProps={styleProps}
        />
      );
    },
    // [MaterialCategory.Alert]: () => {
    //   return (
    //     <Alert
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    [MaterialCategory.Avatar]: () => {
      return (
        <Avatar
          userProps={userProps}
          styleProps={styleProps}
        />
      );
    },
    // [MaterialCategory.AvatarGroup]: () => {
    //   return (
    //     <AvatarGroup
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Badge]: () => {
    //   return (
    //     <Badge
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Breadcrumb]: () => {
    //   return (
    //     <Breadcrumb
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.BreadCrumbItem]: () => {
    //   return (
    //     <BreadCrumbItem
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.ButtonGroup]: () => {
    //   return (
    //     <ButtonGroup
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Card]: () => {
    //   return (
    //     <Card
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Carousel]: () => {
    //   return (
    //     <Carousel
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Cascader]: () => {
    //   return (
    //     <Cascader
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Checkbox]: () => {
    //   return (
    //     <Checkbox
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.CheckboxGroup]: () => {
    //   return (
    //     <CheckboxGroup
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Collapse]: () => {
    //   return (
    //     <Collapse
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.CollapseItem]: () => {
    //   return (
    //     <CollapseItem
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.DatePicker]: () => {
    //   return (
    //     <DatePicker
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.MonthPicker]: () => {
    //   return (
    //     <MonthPicker
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.YearPicker]: () => {
    //   return (
    //     <YearPicker
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.WeekPicker]: () => {
    //   return (
    //     <WeekPicker
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.QuarterPicker]: () => {
    //   return (
    //     <QuarterPicker
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.RangePicker]: () => {
    //   return (
    //     <RangePicker
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Descriptions]: () => {
    //   return (
    //     <Descriptions
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    [MaterialCategory.Divider]: () => {
      return (
        <Divider
          userProps={userProps}
          styleProps={styleProps}
        />
      );
    },
    // [MaterialCategory.Dropdown]: () => {
    //   return (
    //     <Dropdown
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.DropdownButton]: () => {
    //   return (
    //     <DropdownButton
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Empty]: () => {
    //   return (
    //     <Empty
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Input]: () => {
    //   return (
    //     <Input
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.TextArea]: () => {
    //   return (
    //     <TextArea
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.InputTag]: () => {
    //   return (
    //     <InputTag
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.InputNumber]: () => {
    //   return (
    //     <InputNumber
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Radio]: () => {
    //   return (
    //     <Radio
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.RadioGroup]: () => {
    //   return (
    //     <RadioGroup
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    // [MaterialCategory.Switch]: () => {
    //   return (
    //     <Switch
    //       userProps={userProps}
    //       styleProps={styleProps}
    //     />
    //   );
    // },
    [MaterialCategory.Tag]: () => {
      return (
        <Tag
          userProps={userProps}
          styleProps={styleProps}
        />
      );
    },
  };
  return materialObject[category]();
};

