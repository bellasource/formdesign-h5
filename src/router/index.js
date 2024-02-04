import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export const constantRoutes = [
  {
    path: '/monthReport',
    component: () => import('@/views/monthReport/index'),
    hidden: true,
    meta: { title: '项目经理月报' }
  },
]

const createRouter = () =>
  new Router({
    mode: 'history', // require service support
    isAddAsyncMenuData: false,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  })

const router = createRouter()

router.beforeEach((to, from, next) => {
  document.title = to.meta?.title || ''
  next()
})
export default router
