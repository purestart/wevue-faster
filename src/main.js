// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import FastClick from 'fastclick'

import App from './App'
import router from './router'
import store from './vuex';

import { Group, Cell } from 'vux';

import axios from 'axios';

Vue.component('Group', Group)
Vue.component('Cell', Cell)

import './assets/styles/vux-style.scss'

FastClick.attach(document.body)

Vue.config.productionTip = false;

axios.interceptors.request.use(function (config) {
  //Vue.$vux.loading.show({text: '数据加载中'})
  //console.log("数据加载中");

  return config
}, function (error) {
  return Promise.reject(error)
})

axios.interceptors.response.use(function (response) {
  //Vue.$vux.loading.hide()
  //console.log("数据加载完成");
  return response
}, function (error) {
  // Vue.$vux.loading.hide()
  console.log("网络异常");
  // Vue.$vux.toast.show({
  //   text: '网络异常',
  //   position: 'middle',
  //   type: 'cancel'
  // })

  return Promise.reject(error)
})


router.beforeEach((to, from, next) => {
  if (to.path == '/login') {
      //sessionStorage.removeItem('username');
    }
  //let user = sessionStorage.getItem('username');
  if (false) { //!user && to.path != '/login'
      next({path: '/login'})
    } else {
      
      next()
    }
  });
  
  router.afterEach(transition => {
    setTimeout(()=>{
      
    },200)
    
  });

/* eslint-disable no-new */

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app-box')
