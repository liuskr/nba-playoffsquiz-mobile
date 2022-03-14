import { isWeiXin } from './index'
// @ts-ignore
import wx from 'weixin-js-sdk'
import { getWeChatShare } from '@apis'

export const getWechatShare = async (): Promise<void> => {
  if (isWeiXin()) {
    const url = `https://nba75th.ihyx.net/newyear/#/`
    const { data } = await getWeChatShare({ url })
    wx.config({
      appId: 'wx6b8c3d7f8236e99a',
      timestamp: data?.Timestamp,
      nonceStr: data?.RandStr,
      signature: data?.Signature,
      jsApiList: ['updateAppMessageShareData', 'updateTimelineShareData']
    })

    wx.ready(() => {
      wx.updateAppMessageShareData({
        title: 'NBA新春限量版微信红包封面', // 分享标题
        desc: 'NBA虎年限量版微信红包封面，数量有限，先到先得!', // 分享描述
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://nba75th-1307342770.cos.ap-guangzhou.myqcloud.com/loading/newyeahshare.jpg', // 分享图标
        success: function () {
          // 设置成功
          console.log('share success')
        }
      })

      wx.updateTimelineShareData({
        title: 'NBA新春限量版微信红包封面', // 分享标题
        desc: 'NBA虎年限量版微信红包封面，数量有限，先到先得!', // 分享描述
        link: url, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: 'https://nba75th-1307342770.cos.ap-guangzhou.myqcloud.com/loading/newyeahshare.jpg', // 分享图标
        success: function () {
          // 设置成功
          console.log('share success')
        }
      })
    })
  }
}
