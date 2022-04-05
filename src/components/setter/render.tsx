import { SetterCategory } from '@/constants';
import { ComponentType } from '@/types';
import { Form } from '@arco-design/web-react';
import ColorPickerSetter from './ColorPicker';
import InputSetter from './Input';
import InputNumberSetter from './InputNumber';
import SelectSetter from './Select';
import SliderSetter from './Slider';

const FormItem = Form.Item;

interface RenderedSetterType {
  craftProps: Record<string, any>;
  componentsMessage: ComponentType;
  setProp: (cb: any, throttleRate?: number | undefined) => void;
}

const RenderedSetter = ({ craftProps, componentsMessage, setProp }: RenderedSetterType): JSX.Element => {
  const { props } = componentsMessage;
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
                    setProp((nodeProps) => { nodeProps[name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.InputNumber]: () => {
              return (
                <InputNumberSetter
                  value={craftProps[name]}
                  min={setter?.options?.minNumber}
                  onChange={(num, unit) => {
                    setProp((nodeProps) => { nodeProps[name] = `${num}${unit}`; });
                  }}
                />
              );
            },
            [SetterCategory.ColorPicker]: () => {
              return (
                <ColorPickerSetter
                  value={craftProps[name]}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Slider]: () => {
              return (
                <SliderSetter
                  value={craftProps[name]}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Select]: () => {
              return (
                <SelectSetter
                  value={craftProps[name]}
                  onChange={(val) => setProp((nodeProps) => { nodeProps[name] = val; })}
                  selectOptions={setter?.options?.selectOptions}
                />
              );
            },
          };
          return setterObject[setterName]();
        };
        return (
          <FormItem key={name} label={description}>
            {renderSetter(setter.name)}
          </FormItem>
        );
      })}
    </Form>
  );
};

export default RenderedSetter;
