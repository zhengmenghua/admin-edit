import Vue from 'vue'
import VueRouter from 'vue-router'
import layout from '../views/layout'
import login from '@/views/login'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    meta:{title:''},
    component: layout,
    children:[
      {
        path: '/',
        name: 'home',
        meta:{title:'首页'},
        component: ()=>import('@/views/home'),
      },
      {
        path: '/urlEdit',
        name: 'urlEdit',
        meta:{title:'下载地址管理'},
        component: ()=>import('@/views/urlEdit'),
      },
    ],
  },
  {
    path: '/login',
    name: 'login',
    meta:{title:'登录'},
    component:login
  },
  {
    path: '*',
    name: 'notFound',
    meta:{title:''},
    component: ()=>import('@/views/notFound'),
  },
]
const router = new VueRouter({
  routes
})
router.beforeEach((to, from, next) => {
  if (to.meta.title) {
      document.title ='通用后台—' + to.meta.title;
  }
  next()
})
export default router
