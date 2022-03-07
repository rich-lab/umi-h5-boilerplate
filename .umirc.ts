import { defineConfig } from 'umi';

export default defineConfig({
  routes: [{ path: 'index', component: '@/pages/index' }],
  antdCompat: {
    version: 5,
  },
});
