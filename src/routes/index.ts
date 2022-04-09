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
    meta: { title: '竞猜', keepAlive: false }
  },
  {
    path: '/useragreement',
    name: 'userAgreement',
    component: (): Promise<typeof import('*.vue')> => import('@pages/userAgreement/index.vue'),
    meta: { title: '用户协议', keepAlive: false }
  }
]
//
const router = createRouter({
  history,
  scrollBehavior: () => ({ top: 0 }),
  routes
})

router.beforeEach(async (to: _RouteLocationBase, from: unknown, next) => {
  document.title = '2021-2022NBA季后赛竞猜'
  const hasToken = localStorageGet('token')
  const whiteList: string[] = ['/', '/useragreement']
  if (whiteList.indexOf(to.path) !== -1) {
    next()
  } else {
    hasToken ? next() : next('/')
  }
})

export default router
