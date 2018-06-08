import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
// 定义懒加载路径
const _import_ = file => () => import(`views/${file}.vue`)

// 定义路由 更多配置https://router.vuejs.org/zh-cn/
const routerMap = [
  {
    path: '/',
    name: '速来喜',
    redirect: '/home',
    component: _import_('Layout/index'),
    children: [
      { path: 'home', component: _import_('Home/HelloWorld'), name: '首页' }
    ]
  },
  {
    path: '/list',
    name: '测试',
    alias: '/c',    // 别名
    component: _import_('List/list'),
    children : [
      {path:'list1',component: _import_('List/listA'),name:'测试1'}
    ]
  }
]

// 导出 router对象
export const router =  new Router({
  mode : 'history',
  routes: routerMap
})
