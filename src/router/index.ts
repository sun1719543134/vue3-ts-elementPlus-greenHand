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
        labelCache: true,
        title: '首页'
      },
    }]
  }, {
    path: '/ceshi',
    name: 'ceshi',
    component: () => import('../views/Layout.vue'),
    meta: {
      sidebar: true,
      labelCache: true,
      title: '测试一'

    },
    children: [{
      path: '/a1',
      name: 'a1',
      component: () => import('../views/ceshi/a1.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试a1'
      },
    }, {
      path: '/a2',
      name: 'a2',
      component: () => import('../views/ceshi/a2.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试a2'
      },
    }, {
      path: '/a3',
      name: 'a3',
      component: () => import('../views/ceshi/a3.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试a3'
      },
    }]
  }, {
    path: '/ceshi2',
    name: 'ceshi2',
    component: () => import('../views/Layout.vue'),
    meta: {
      sidebar: true,
      labelCache: true,
      title: '测试二'
    },
    children: [{
      path: '/b1',
      name: 'b1',
      component: () => import('../views/ceshi2/b1.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试二b1'
      },
    }, {
      path: '/b2',
      name: 'b2',
      component: () => import('../views/ceshi2/b2.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试二b2'
      },
    }, {
      path: '/b3',
      name: 'b3',
      component: () => import('../views/ceshi2/b3.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试二b3'
      },
    }]
  }, {
    path: '/ceshi3',
    name: 'ceshi3',
    component: () => import('../views/Layout.vue'),
    meta: {
      sidebar: true,
      labelCache: true,
      title: '测试三'
    },
    children: [{
      path: '/c1',
      name: 'c1',
      component: () => import('../views/ceshi3/c1.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试三c1'
      },
    }, {
      path: '/c2',
      name: 'c2',
      component: () => import('../views/ceshi3/c2.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试三c2'
      },
    }, {
      path: '/c3',
      name: 'c3',
      component: () => import('../views/ceshi3/c3.vue'),
      meta: {
        sidebar: true,
        labelCache: true,
        title: '测试三c3'
      },
    }]
  }]
})
import pinia from '@/stores/store'
import { useUserStore } from "@/stores/user"
router.beforeEach((to, from, next) => {
  const store = useUserStore(pinia)  // 要放在 router.beforeEach 函数里面,否则缓存会失效
  // next()
  if (store.userToken == '' && to.name != 'login') {
    next('/login')
  } else {
    next()
  }
})
export default router
