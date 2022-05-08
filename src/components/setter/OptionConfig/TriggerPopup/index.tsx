import { IconMapping, SetterCategory } from '@/constants';
import { Form } from '@arco-design/web-react';
import ColorPickerSetter from '../../ColorPicker';
import IconSelectSetter from '../../IconSelect';
import InputSetter from '../../Input';
import InputNumberSetter from '../../InputNumber';
import RadioSetter from '../../Radio';
import SelectSetter from '../../Select';
import SliderSetter from '../../Slider';
import SwitchSetter from '../../Switch';
import WithUnitInputNumberSetter from '../../WithUnitInputNumber';
import * as S from './styled';

const FormItem = Form.Item;

/**
 * option弹出框 Props
 */
interface TriggerPopupPropsType {
  /**
   * 当前值
   */
  value: Record<string, any>;
  /**
   * 选项说明
   */
  materialOptions: Record<string, {
    name: SetterCategory;
    description: string;
    defaultValue: any;
    options: Record<string, any>;
  }>;
  /**
   * 值变更的回调
   * @param {string} propertyName 当前修改的属性名
   * @param {any} newValue 新值
   */
  valueOnChange: (propertyName: string, newValue: any) => void;
}

const TriggerPopup = ({ value, materialOptions, valueOnChange }: TriggerPopupPropsType) => {
  const renderOptionSetter = (optionSetterName: SetterCategory, currentProperty: string, currentOptions: Record<string, any>): JSX.Element => {
    const setterObject: Record<SetterCategory, () => JSX.Element> = {
      [SetterCategory.Input]: () => {
        return (
          <InputSetter
            value={value[currentProperty]}
            maxLength={currentOptions.maxLength}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
      [SetterCategory.InputNumber]: () => {
        return (
          <InputNumberSetter
            value={value[currentProperty]}
            min={currentOptions.minNumber}
            max={currentOptions.maxNumber}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
      [SetterCategory.WithUnitInputNumber]: () => {
        return (
          <WithUnitInputNumberSetter
            value={value[currentProperty]}
            min={currentOptions.minNumber}
            max={currentOptions.maxNumber}
            optionDisabled={currentOptions.optionDisabled}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
      [SetterCategory.ColorPicker]: () => {
        return (
          <ColorPickerSetter
            value={value[currentProperty]}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
      [SetterCategory.Slider]: () => {
        return (
          <SliderSetter
            value={value[currentProperty]}
            min={currentOptions.min}
            max={currentOptions.max}
            step={currentOptions.step}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
      [SetterCategory.Select]: () => {
        return (
          <SelectSetter
            value={value[currentProperty]}
            selectOptions={currentOptions.selectOptions}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
      [SetterCategory.IconSelect]: () => {
        return (
          <IconSelectSetter
            value={value[currentProperty] ? value[currentProperty].type.render.displayName : 'null'}
            onChange={(val) => {
              valueOnChange(currentProperty, val === 'null' ? null : IconMapping[val]);
            }}
          />
        );
      },
      [SetterCategory.Radio]: () => {
        return (
          <RadioSetter
            value={value[currentProperty]}
            radioOptions={currentOptions.radioOptions}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
      [SetterCategory.Switch]: () => {
        return (
          <SwitchSetter
            value={value[currentProperty]}
            onChange={(val) => {
              valueOnChange(currentProperty, val);
            }}
          />
        );
      },
    };
    return setterObject[optionSetterName]();
  };
  return (
    <S.TriggerPopupContainer >
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }}>
        {Object.keys(materialOptions).map((item) => {
          const { name, description, options } = materialOptions[item];
          return (
            <FormItem label={description} key={item}>
              {renderOptionSetter(name, item, options)}
            </FormItem>
          );
        })}
      </Form>
    </S.TriggerPopupContainer>
  );
};

export default TriggerPopup;
