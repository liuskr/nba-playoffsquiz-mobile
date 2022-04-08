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
// 获取用户信息
export const getUserInfo = async (): Promise<HttpResponse> => {
  return request('api/me/info', {
    method: 'get'
  })
}

// 获取用户竞猜
export const getUserGuess = async (): Promise<HttpResponse> => {
  return request('api/guess', {
    method: 'get'
  })
}

// 提交用户竞猜
export const setUserGuess = async (params: { GuessData: Array<any> }): Promise<HttpResponse> => {
  return request('api/guess', {
    method: 'post',
    data: params
  })
}
