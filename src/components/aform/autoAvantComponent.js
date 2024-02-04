/*
 * @Author: linZeJian
 * @Date: 2022-08-25 14:31:36
 * @LastEditors: linZeJian
 * @LastEditTime: 2022-08-25 17:12:50
 * @Description: 自动注册组件
 */
import Vue from 'vue'

const componentsContext = require.context('./avantComponents', true, /.vue$/)
componentsContext.keys().forEach(file_name => {
  // 获取文件中的 default 模块
  const componentConfig = componentsContext(file_name).default
  Vue.component(componentConfig.name, componentConfig)
})