import request from '@utils/request'
import type { HttpResponse } from './type'

// 获取手机验证码
export const getVerificationCode = async (params: { phone: string }): Promise<HttpResponse> => {
  return request('api/verify/code', {
    method: 'post',
    data: params
  })
}
// 登录
export const updateUseLogin = async (params: { phone: string; code: string }): Promise<HttpResponse> => {
  return request('api/login', {
    method: 'post',
    data: params
  })
}
// pv uv 统计
export const updatePageStatistics = async (params: { uuid: string; path: string }): Promise<HttpResponse> => {
  return request('api/page/record', {
    method: 'post',
    data: params
  })
}

// 微信分享
export const getWeChatShare = async (params: { url: string }): Promise<HttpResponse> => {
  return request('api/wx/share', {
    method: 'get',
    params
  })
}
