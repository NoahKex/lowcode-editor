import { IRouterConfig, lazy } from 'ice';

const Home = lazy(() => import('@/pages/Home'));
const Preview = lazy(() => import('@/pages/Preview'));

const routerConfig: IRouterConfig[] = [
  {
    path: '/preview',
    component: Preview,
    exact: true,
    pageConfig: {
      title: 'preview',
    },
  },
  {
    path: '/',
    component: Home,
    pageConfig: {
      title: 'xingyun lowcode editor',
    },
  },
];

export default routerConfig;
