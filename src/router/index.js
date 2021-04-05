import Vue from 'vue'
import VueRouter from 'vue-router'
import ScreenPage from '../views/ScreenPage'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'index',
    component: ScreenPage
  },
  {
    path: '*',
    redirect: '/'
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
