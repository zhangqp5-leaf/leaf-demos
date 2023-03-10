import { defineConfig } from "umi";

export default defineConfig({
  npmClient: 'pnpm',
  routes: [
    {
      path: '/',
      redirect: '/home',
    },
    {
      name: '首页',
      path: '/home',
      title: '首页',
      component: './',
    },
    {
      name: '日历翻页效果',
      path: '/countdown',
      title: '日历翻页效果',
      component: './countdown',
    },
    {
      name: '拖拽排序',
      path: '/dragDrop',
      title: '拖拽排序',
      component: './dragDrop',
    },
  ],
});
