import { SetterCategory } from '@/constants';
import { ComponentType, SetterOptions } from '@/types';
import { Form, Input, InputNumber, Select, Slider } from '@arco-design/web-react';
import ColorPicker from '../custom/ColorPicker';

const FormItem = Form.Item;
const { Option } = Select;

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
        const { name, description } = item;
        const { setter } = item as unknown as SetterOptions;
        const renderSetter = (setterName: SetterCategory): JSX.Element => {
          const setterObject: Record<SetterCategory, () => JSX.Element> = {
            [SetterCategory.Input]: () => {
              return (
                <Input
                  value={craftProps[name]}
                  maxLength={setter?.options?.maxLength ?? 10}
                  allowClear
                  placeholder="请输入"
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.InputNumber]: () => {
              return (
                <InputNumber
                  mode="button"
                  value={craftProps[name]}
                  min={setter?.options?.minNumber ?? 0}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.ColorPicker]: () => {
              return (
                <ColorPicker
                  value={craftProps[name]}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Slider]: () => {
              return (
                <Slider
                  value={craftProps[name]}
                  onChange={(val) => {
                    setProp((nodeProps) => { nodeProps[name] = val; });
                  }}
                />
              );
            },
            [SetterCategory.Select]: () => {
              return (
                <Select
                  placeholder="请选择"
                  defaultValue={craftProps[name]}
                  onChange={(val) => setProp((nodeProps) => { nodeProps[name] = val; })}
                >
                  {setter?.options?.selectOptions.map((option) => (
                    <Option key={option} value={option}>
                      {option}
                    </Option>
                  ))}
                </Select>
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
