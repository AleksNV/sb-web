import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('pages/home/index.tsx'),
  route('banking', 'pages/banking/index.tsx'),
  route('client-list', 'pages/client-list/index.tsx'),
  route('*', 'pages/not-found/index.tsx'),
] satisfies RouteConfig;
