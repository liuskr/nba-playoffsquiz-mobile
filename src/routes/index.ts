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
