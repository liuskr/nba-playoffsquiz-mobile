import { createRouter, createWebHistory, RouteRecordRaw, _RouteLocationBase } from 'vue-router'
import { localStorageGet } from '@utils/auth'
const history = createWebHistory()
const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: (): Promise<typeof import('*.vue')> => import('@pages/home/index.vue'),
    meta: { title: '首页', keepAlive: true }
  },
  {
    path: '/rankinglist',
    name: 'RankingList',
    component: (): Promise<typeof import('*.vue')> => import('@pages/list/index.vue'),
    meta: { title: '积分排行', keepAlive: false }
  },
  {
    path: '/guessing',
    name: 'Guessing',
    component: (): Promise<typeof import('*.vue')> => import('@pages/guessing/index.vue'),
    meta: { title: '竞猜', keepAlive: true }
  }
]
//
const router = createRouter({
  history,
  scrollBehavior: () => ({ top: 0 }),
  routes
})

router.beforeEach(async (to: _RouteLocationBase, from: unknown, next) => {
  document.title = 'NBA2022季后赛竞猜'
  const hasToken = localStorageGet('token')
  const whiteList: string[] = ['/']
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    hasToken ? next() : next('/')
  }
})

export default router
