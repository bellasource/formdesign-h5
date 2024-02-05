import * as ww from '@wecom/jssdk'

/**
 * 生成指定长度的随机字符串
 */
function randomStr(len = 16) {
  const strArr = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678'
  let maxPos = strArr.length;
  let str = '';
  for (let i = 0; i < len; i++) {
    str += strArr.charAt(Math.floor(Math.random() * maxPos));
  }
  return str
}
async function getConfigSignature(url) {
  const timestamp = Date.now()
  const nonceStr = randomStr()
  const signature = ''
  console.log(nonceStr, nonceStr)
  return { timestamp, nonceStr, signature }
}

function wxAuth() {
  ww.register({
    corpId: "",
    agentId: '',
    jsApiList: [
      'checkJsApi',
      'getContext',
      'selectExternalContact',
      'getCurExternalContact',
      'getCurExternalChat',
      'sendChatMessage',
      'launchMiniprogram'
    ],
    async getConfigSignature(url) {
      await Promise.resolve(()=> {})
      return {
        timestamp: '',
        nonceStr: '',
        signature: ''
      }
    },
    async getAgentConfigSignature(url) {
      await Promise.resolve(()=> {})
      return {
        timestamp: '',
        nonceStr: '',
        signature: ''
      }
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

export default wxAuth