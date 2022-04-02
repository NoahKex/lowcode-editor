import { SetterCategory } from '@/constants';

export interface SetterOptions {
  setter: {
    name: SetterCategory;
    options?: Record<string, any>;
  };
}
