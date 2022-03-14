import axios, { AxiosRequestConfig, AxiosResponse, AxiosError } from 'axios'
import { localStorageGet, localStorageRemove } from './auth'
import { Toast } from 'vant'
const codeMessage: Record<number, string> = {
  400: '请求错误',
  401: '用户没有权限。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求是不存在的记录',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除',
  422: '验证错误',
  500: '服务器发生错误',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。'
}

const { VITE_APP_BASE_API, DEV } = import.meta.env

const service = axios.create({
  baseURL: DEV ? '/dev/' : VITE_APP_BASE_API,
  // withCredentials: true,
  timeout: 12000
})

// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    const token = localStorageGet('token')
    config.headers = {
      'Content-Type': 'application/json;charset=utf-8',
      Authorization: `Bearer ${token}`,
      Origin: 'nba75th.ihyx.net'
    }
    return config
  },
  (error: AxiosError) => {
    return Promise.resolve(error || '服务器异常')
  }
)

// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const { status } = response
    console.log(response)
    // console.log(response.data)
    const { message } = response.data
    if (status !== 200) {
      if (status === 401 || status === 403) {
        // 登录过期，清除token,跳转至对应登录页
        localStorageRemove('token')
        window.location.reload()
      }
      Toast(message)
      return Promise.reject(new Error(message || 'Error'))
    }
    return response
  },
  (error: AxiosError) => {
    const { response } = error
    if (response && response.status) {
      const { status, statusText } = response
      const errorText = codeMessage[status] || statusText
      Toast(errorText)
    } else if (!response) {
      Toast('您的网络发生异常，无法连接服务器')
    }
    return Promise.reject(error?.response?.status)
  }
)

export default service
