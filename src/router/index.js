import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/views/Login.vue'
import Home from '@/views/Home.vue'
import Welcome from '@/views/Welcome.vue'
import Users from '@/views/user/User.vue'
import Rights from '@/views/power/Rights.vue'
import Roles from '@/views/power/Roles.vue'
 import Cate from '@/views/goods/Cate.vue'
import Params from '@/views/goods/Params.vue'
import GoodsList from '@/views/goods/List.vue'
import Add from '@/views/goods/Add.vue'
import Order from '@/views/order/Order.vue'
import Report from '@/views/report/Report.vue'
Vue.use(Router)
const routes = [
  {path:'/login',component:Login },
    {path:'/',redirect:'/login'},
    {path:'/home',component:Home,redirect:'/welcome', children:[
      {path:'/welcome',component:Welcome},
      {path:'/users',component:Users},
      {path:'/rights',component:Rights},
      { path: '/roles', component: Roles },
      { path: '/categories', component: Cate },
      { path: '/params', component: Params },
      { path: '/goods', component: GoodsList },
      { path: '/goods/add', component: Add },
      { path: '/orders', component: Order },
      { path: '/reports', component: Report }
    ]} //子路由
]
const router = new Router({
  mode:'history',//去掉#
  routes
})
// 挂载路由导航守卫,to表示将要访问的路径，from表示从哪里来，next是下一个要做的操作 next('/login')强制跳转login
router.beforeEach((to, from, next) => {
  // 访问登录页，放行
  if (to.path === '/login') return next()
  // 获取token
  const tokenStr = window.sessionStorage.getItem('token')
  // 没有token, 强制跳转到登录页
  if (!tokenStr) return next('/login')
  next()
})


export default router
