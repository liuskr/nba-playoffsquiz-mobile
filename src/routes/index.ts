import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const history = createWebHashHistory()

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Home',
    component: (): Promise<typeof import('*.vue')> => import('@pages/home/index.vue'),
    meta: { title: '首页', keepAlive: true }
  },
]
//
const router = createRouter({
  history,
  scrollBehavior: () => ({ top: 0 }),
  routes
})

router.beforeEach(() => {
  document.title = '领NBA微信红包封面'
})

export default router
