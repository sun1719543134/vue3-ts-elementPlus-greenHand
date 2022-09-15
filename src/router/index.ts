import { createRouter, createWebHistory } from 'vue-router'

/**
 * meta 为对象 必须写 可以为空对象
 * meta{
 * sidebar 侧边栏是否显示 不写或为false时在侧边栏中不显示 为true时显示
 * labelCache 标签栏显示与页面缓存 为false时不显示不缓存 为true时显示缓存
 * }
 */
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: '/',
    redirect: 'home'
  }, {
    path: '/:pathMatch(.*)',
    redirect: 'home'
  }, {
    path: '/login',
    name: 'login',
    component: () => import('../views/Login.vue'),
  }, {
    path: '/layout',
    name: 'layout',
    component: () => import('../views/Layout.vue'),
    meta: {
      sidebar: true,
      labelCache: true
    },
    children: [{
      path: '/home',
      name: 'home',
      component: () => import('../views/Home.vue'),
      meta: {
        sidebar: true,
        labelCache: true
      },
    }]
  }, {
    path: '/ceshi',
    name: 'ceshi',
    component: () => import('../views/Layout.vue'),
    meta: {
      sidebar: true,
      labelCache: true
    },
    children: [{
      path: '/a1',
      name: 'a1',
      component: () => import('../views/ceshi/a1.vue'),
      meta: {
        sidebar: true,
        labelCache: true
      },
    }, {
      path: '/a2',
      name: 'a2',
      component: () => import('../views/ceshi/a2.vue'),
      meta: {
        sidebar: true,
        labelCache: true
      },
    }, {
      path: '/a3',
      name: 'a3',
      component: () => import('../views/ceshi/a3.vue'),
      meta: {
        sidebar: true,
        labelCache: true
      },
    }]
  }]
})
import pinia from '@/stores/store'
import { useUserStore } from "@/stores/user"
router.beforeEach((to, from, next) => {
  const store = useUserStore(pinia)  // 这里一定要把 pinia传入进去
  console.log('userToken', store.userToken)
  console.log('to.name', to.name)
  // next()
  if (store.userToken == '' && to.name != 'login') {
    next('/login')
  } else {
    next()
  }
})
export default router
