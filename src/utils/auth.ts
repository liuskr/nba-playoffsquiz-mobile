/**
 * @param { String } key  属性
 * @param { any } value 值
 * @param { number } expire 过期时间,毫秒数
 */

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const localStorageSet = (key: string, value: any): void => {
  if (typeof value === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
}

export const localStorageGet = (key: string): string => {
  return localStorage.getItem(key) as string
}

export const localStorageRemove = (key: string): void => {
  localStorage.removeItem(key)
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const localStorageSetExpire = (key: string, value: any, expire: number): void => {
  if (typeof value === 'object') value = JSON.stringify(value)
  localStorage.setItem(key, value)
  setTimeout(() => {
    localStorage.removeItem(key)
  }, expire)
}

declare const window: Window & { WebViewJavascriptBridge: any; WVJBCallbacks: any }

/**
 * 获取app方法
 * @param callback 回调函数
 */
export function setupWebViewJavascriptBridge(callback: () => void): void {
  if (window.WebViewJavascriptBridge) {
    // @ts-ignore
    return callback(WebViewJavascriptBridge)
  }
  if (window.WVJBCallbacks) {
    return window.WVJBCallbacks.push(callback)
  }
  window.WVJBCallbacks = [callback]
  const WVJBIframe = document.createElement('iframe')
  WVJBIframe.style.display = 'none'
  WVJBIframe.src = 'https://__bridge_loaded__'
  document.documentElement.appendChild(WVJBIframe)
  setTimeout(function () {
    document.documentElement.removeChild(WVJBIframe)
  }, 0)
}
