import { createRouter, createWebHistory } from 'vue-router'
/**
 * meta 为对象 必须写 可以为空对象
 * meta{
 * sidebar 侧边栏是否显示 不写或为false时在侧边栏中显示 为true时不显示
 * }
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    redirect: 'home',
    meta: {
      sidebar: true
    }
  }, {
    path: '/:pathMatch(.*)',
    redirect: 'home',
    meta: {
      sidebar: true
    }
  }, {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
    }]
  }, {
    path: '/ceshi',
    name: 'ceshi',
    component: () => import('../views/Layout.vue'),
    children: [{
      path: '/a1',
      name: 'a1',
      component: () => import('../views/ceshi/a1.vue'),
    }, {
      path: '/a2',
      name: 'a2',
      component: () => import('../views/ceshi/a2.vue'),
    }, {
      path: '/a3',
      name: 'a3',
      component: () => import('../views/ceshi/a3.vue'),
    }]
  }]
})


export default router
