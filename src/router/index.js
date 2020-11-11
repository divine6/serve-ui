import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode: "history",
  routes: [
    {
      path: '/',
      redirect: '/qy-icon'
    },
    {
      path: '/qy-icon',
      name: 'qy-icon',
      component: () => import('@/views/qy-icon')
    },
  ]
})
