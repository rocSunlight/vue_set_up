// import store from '../store';
// import Vue from 'vue';
import {router} from './index';

// 登陆拦截器
// router.beforeEach((to, from, next) => {
//   if (to.meta.login) { //判断前往的界面是否需要登陆
//     if (store.state.user.user.name) { // 是否已经登陆
//       next();
//     } else {
//       Vue.prototype.$alert('请先登录!')
//          .then(() => {
//            store.state.user.isLogin = true;
//          });
//     }
//   } else {
//     if (to.meta.page) store.state.app.pageLoading = true;
//     next();
//   }
//
// });

// 路由进入前
router.afterEach((to, from) => {
  // if (to.meta.page) store.state.app.pageLoading = false;
  document.title = to.name;
});

export default router;
