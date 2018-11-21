import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloFromVux'
// import News from '../views/news/index.vue'

// import Home from '../views/home/index.vue';
// import Schedules from '../views/schedules/index.vue';
// import Profile from '../views/profile/index.vue';

import Index from '../views/index.vue';

const News = () => import('../views/news/index.vue')
const Profile = () => import('../views/profile/index.vue')
const Schedules = () => import('../views/schedules/index.vue')
const Home = () => import('../views/home/index.vue')

Vue.use(Router)

export default new Router({
  //mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: { name: 'home' },
      children: [{
        path: 'home',
        name: 'home',
        //component: resolve => require(['../views/home/index.vue'], resolve)
        component: Home,
      },{
        path: 'schedule',
        name: 'schedule',
        component: Schedules,
        //component: resolve => require(['../views/schedules/index.vue'], resolve)
      },{
        path: 'profile',
        name: 'profile',
        component: Profile,
        //component: resolve => require(['../views/profile/index.vue'], resolve)
      },]
    },
    {
      path: '/news',
      name: 'news',
      component: News
      //component: resolve => require(['../views/news/index.vue'], resolve)
    },
    {
      path: '*',
      hidden: true,
      redirect: { path: '/home' }
    }
  ]
})
