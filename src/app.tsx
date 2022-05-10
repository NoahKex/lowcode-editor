import { runApp, IAppConfig } from 'ice';

const appConfig: IAppConfig = {
  app: {
    rootId: 'xingyun-lowcode-editor',
  },
  router: {
    type: 'browser',
  },
};

runApp(appConfig);
