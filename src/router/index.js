import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloFromVux'
import News from '../views/news/index.vue'
import Index from '../views/index.vue';
import Home from '../views/home/index.vue';
import Schedules from '../views/schedules/index.vue';
import Profile from '../views/profile/index.vue';

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: Index,
      redirect: { name: 'home' },
      children: [{
        path: 'home',
        name: 'home',
        component: Home,
      },{
        path: 'schedule',
        name: 'schedule',
        component: Schedules,
      },{
        path: 'profile',
        name: 'profile',
        component: Profile,
      },]
    },
    {
      path: '/news',
      name: 'news',
      component: News
    }
  ]
})
