// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router/permisson'

Vue.config.productionTip = false

// 引入rem.js 和 reset.css初始化css
import './styles/index.styl'
import './utils/rem'


/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
