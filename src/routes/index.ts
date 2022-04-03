import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

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

router.beforeEach(() => {
  document.title = 'NBA2022季后赛竞猜'
})

export default router
