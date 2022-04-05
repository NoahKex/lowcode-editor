import { SetterCategory } from '@/constants';

export interface SetterConfig {
  setter: {
    name: SetterCategory;
    options?: Record<string, any>;
  };
}
