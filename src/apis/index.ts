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

// 获取当前轮次
export const getGuessIndex = async (): Promise<HttpResponse> => {
  return request('api/guess/index', {
    method: 'get'
  })
}

// 获取赛况
export const getGameInfo = async (): Promise<HttpResponse> => {
  return request('api/game', {
    method: 'get'
  })
}

// 获取排行榜
export const getRankingList = async (): Promise<HttpResponse> => {
  return request('api/rank/index', {
    method: 'get'
  })
}

// 微信登录
export const getWeChatLogin = async (params: { code: string }): Promise<HttpResponse> => {
  return request('api/miniprogram', {
    method: 'post',
    data: params
  })
}

// app登录
export const getAppLogin = async (params: { data: string | number }): Promise<HttpResponse> => {
  return request('api/login/app', {
    method: 'post',
    data: params
  })
}
