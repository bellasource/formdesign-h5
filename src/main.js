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

Vue.use(Vant);
Vue.config.productionTip = false

// 单个组件测试排查
import './components/aform/avantComponents/index'
// 自动注册
// import './components/aform/autoAvantComponent'

import AvueUeditor from 'avue-plugin-ueditor'
Vue.use(AvueUeditor);

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
