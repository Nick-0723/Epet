// 引入vue 和 vuerouter
import Vue from 'vue';
import VueRouter from 'vue-router';
// 使用 Vue-router
Vue.use(VueRouter);
// 引入各个模块
import main from '../pages/main/main.vue';
import cart from '../pages/cart/cart.vue';
import category from '../pages/category/category.vue';
import tab1 from '../pages/category/tab1.vue';
import tab2 from '../pages/category/tab2.vue';

/* 引入登录 / 注册的模块 */
import login from '../pages/user/login.vue';
import register from '../pages/user/register.vue';

import place from '../pages/place/place.vue';
// 暴露出去
export default new VueRouter({
  linkActiveClass: 'active',
  routes:[
    {
      path:'/',
      redirect :'/login'
    },
    {
      path:'/main',
      component: main
    },
    {
      path:'/category',
      component: category,
      children: [
        {
          path : '/category',
          redirect: '/category/tab1'
        },
        {
          path: 'tab1',
          component: tab1
        },
        {
          path: 'tab2',
          component: tab2
        }
      ]
    },

    {
      path:'/cart',
      component: cart
    },
    {
      path:'/login',
      component: login
    },
    {
      path:'/register',
      component: register
    },
    {
      path:'/place',
      component: place
    }
  ]
})
