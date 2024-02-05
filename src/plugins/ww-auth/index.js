import * as ww from '@wecom/jssdk'
import Vue from 'vue'

Vue.prototype.$ww = ww
const JSAPI_TICKET = 'sM4AOVdWfPE4DxkXGEs8VMCPGGVi4C3VM0P37wVUCFvkVAy_90u5h9nbSlYy3-Sl-HhTdfl2fzFy1AOcHKP7qg '

export function wxAuth() {
  console.log('hello')
  ww.register({
    corpId: 'ww7ca4776b2a70000',
    jsApiList: ['selectExternalContact', 'chooseImage'],
    getConfigSignature() {
      return ww.getSignature(JSAPI_TICKET)
    },
    onConfigSuccess(res) {
      console.log("onConfigSuccess")
      console.log(res)
    },
    onConfigFail(res) {
      console.log("onConfigFail")
      console.log(res)
    },
    onAgentConfigSuccess(res) {
      console.log("onAgentConfigSuccess")
      console.log(res)
    },
    onAgentConfigFail(res) {
      console.log("onAgentConfigFail")
      console.log(res)
    }
  })
}


export default {
  install: wxAuth
}
