/*
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 16:15:17
 * @Description: 
 */
import Vue from 'vue'
import App from './App.vue'
import router from '@/router'
import Vant from 'vant';
import 'vant/lib/index.css';
import components from '@/components/index'
import wwAuth from '@/plugins/ww-auth'


Vue.use(wwAuth);
Vue.use(Vant);
Vue.use(components);
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
