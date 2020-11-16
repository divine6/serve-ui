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
    {
      path: '/qy-button',
      name: 'qy-button',
      component: () => import('@/views/qy-button')
    },
    {
      path: '/qy-alert',
      name: 'qy-alert',
      component: () => import('@/views/qy-alert')
    },
    {
      path: '/qy-card',
      name: 'qy-card',
      component: () => import('@/views/qy-card')
    },
    {
      path: '/qy-collapse',
      name: 'qy-collapse',
      component: () => import('@/views/qy-collapse')
    },
  ]
})
