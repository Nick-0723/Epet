
import Vue from 'vue'
import { Swipe, SwipeItem ,Navbar, TabItem,TabContainer,
         TabContainerItem, Toast,Button  }
         from 'mint-ui';

import VueScroller from 'vue-scroller';
import VueLazyload from 'vue-lazyload';
import App from './App.vue';
import router from './router';
import store from './store';
import loading from './assets/imgs/loading.gif';
/**/
import { IndexList, IndexSection } from 'mint-ui';
Vue.component(IndexList.name, IndexList);
Vue.component(IndexSection.name, IndexSection);
/**/
import { Cell } from 'mint-ui';
Vue.component(Cell.name, Cell);

// 引入控制地址的选择插件
import Distpicker from 'v-distpicker';
// 引入图标库
import './assets/stylus/fonts.styl';
import './mock/mockServer';

Vue.use(VueScroller);

// 声明使用 轮播
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
 /*导航*/
Vue.component(Navbar.name, Navbar);
Vue.component(TabItem.name, TabItem);
 /*面板*/
Vue.component(TabContainer.name, TabContainer);
Vue.component(TabContainerItem.name, TabContainerItem);

Vue.component(Button.name, Button);     /* 购物车里面的 */
 /*内部会自定义一个全局指令 lazy来实现图片懒加载*/
Vue.use(VueLazyload, {
  loading
});


// 地址选择插件
Vue.component('v-distpicker', Distpicker);

new Vue({
  el: '#app',
  render: h => h(App),
  router,
  store

});
