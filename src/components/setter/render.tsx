import { ComponentsMessagePropName, CraftPropsName, SetterCategory } from '@/constants';
import { ComponentType } from '@/types';
import { Divider, Form } from '@arco-design/web-react';
import ColorPickerSetter from './ColorPicker';
import InputSetter from './Input';
import InputNumberSetter from './InputNumber';
import PropertyMixer from './PropertyMixer';
import RadioSetter from './Radio';
import SelectSetter from './Select';
import SliderSetter from './Slider';
import SwitchSetter from './Switch';

const FormItem = Form.Item;

interface RenderedSetterType {
  craftProps: Record<string, any>;
  componentsMessage: ComponentType;
  componentsMessagePropName: ComponentsMessagePropName;
  craftPropsName: CraftPropsName;
  setProp: (cb: any, throttleRate?: number | undefined) => void;
}

const RenderedSetter = ({ craftProps, componentsMessage, componentsMessagePropName, craftPropsName, setProp }: RenderedSetterType): JSX.Element => {
  const props = componentsMessage[componentsMessagePropName];
  return (
    <Form labelCol={{ span: 8 }} wrapperCol={{ span: 16 }}>
      {props?.map((item) => {
        const { name, description, setter } = item;
        const renderSetter = (setterName: SetterCategory): JSX.Element => {
          const setterObject: Record<SetterCategory, () => JSX.Element> = {
            [SetterCategory.Input]: () => {
              return (
                <InputSetter
                  value={craftProps[name]}
                  maxLength={setter?.options?.maxLength}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.InputNumber]: () => {
              return (
                <InputNumberSetter
                  value={craftProps[name]}
                  min={setter?.options?.minNumber}
                  max={setter?.options?.maxNumber}
                  optionDisabled={setter?.options?.optionDisabled}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.ColorPicker]: () => {
              return (
                <ColorPickerSetter
                  value={craftProps[name]}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Slider]: () => {
              return (
                <SliderSetter
                  value={craftProps[name]}
                  min={setter?.options?.min}
                  max={setter?.options?.max}
                  step={setter?.options?.step}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Select]: () => {
              return (
                <SelectSetter
                  value={craftProps[name]}
                  selectOptions={setter?.options?.selectOptions}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Radio]: () => {
              return (
                <RadioSetter
                  value={craftProps[name]}
                  radioOptions={setter?.options?.radioOptions}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Switch]: () => {
              return (
                <SwitchSetter
                  value={craftProps[name]}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.PropertyMixer]: () => {
              return (
                <PropertyMixer
                  propertyList={setter?.options?.propertyList}
                  description={description}
                  value={craftProps[name]}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[craftPropsName][name] = val; });
                  }}
                />
              );
            },
          };
          return setterObject[setterName]();
        };
        return (
          <div key={name}>
            <FormItem label={description}>
              {renderSetter(setter.name)}
            </FormItem>
            <Divider style={{ height: '1px', margin: '-10px 0 10px 0' }} />
          </div>
        );
      })}
    </Form>
  );
};

export default RenderedSetter;
