/*
 * @Author: linZeJian
 * @Date: 2022-08-24 10:53:55
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-26 16:20:27
 * @Description: 手动注册组件
 */
import Vue from 'vue'
import Input from './input.vue'
import Number from './number.vue'
import Map from './map.vue'
import Radio from './radio.vue'
import Checkbox from './checkbox.vue'
import Picker from './picker.vue'
import Cascader from './cascader.vue'
import Upload from './upload.vue'
import Datetime from './datetime.vue'
import Switch from './switch.vue'
import Rate from './rate.vue'
import Slider from './slider.vue'
import Dynamic from './dynamic.vue'
import Ueditor from './ueditor.vue'
import AvueUeditor from 'avue-plugin-ueditor'

Vue.component("avant-input",Input)
Vue.component("avant-number",Number)
Vue.component("avant-map",Map)
Vue.component("avant-radio",Radio)
Vue.component("avant-checkbox",Checkbox)
Vue.component("avant-picker",Picker)
Vue.component("avant-cascader",Cascader)
Vue.component("avant-upload",Upload)
Vue.component("avant-datetime",Datetime)
Vue.component("avant-switch",Switch)
Vue.component("avant-rate",Rate)
Vue.component("avant-slider",Slider)
Vue.component("avant-dynamic",Dynamic)
Vue.component("avant-ueditor",Ueditor)
Vue.use(AvueUeditor)
