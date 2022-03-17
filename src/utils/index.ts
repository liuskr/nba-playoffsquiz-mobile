// import { Toast } from 'vant'

/**
 * 判断是否微信
 * @returns true or false
 */
export const isWeiXin = (): boolean => {
  const ua = window.navigator.userAgent.toLowerCase()
  const match = ua.match(/MicroMessenger/i)
  if (match === null) {
    return false
  }
  if (match.includes('micromessenger')) {
    return true
  }
  return false
}

/**
 *
 * @param func 要执行的函数
 * @param wait 时间
 * @param immediate 是否在触发事件后 在时间段n开始，立即执行，否则是时间段n结束，才执行
 * @returns
 */
export const debounce = (func: (val: string) => void, wait: number, immediate: boolean): (() => void) => {
  let timer: NodeJS.Timeout | null
  return (...args: any) => {
    if (timer) clearInterval(timer)
    if (immediate) {
      if (!timer) func.apply(this, args)
      timer = setTimeout(function () {
        timer = null
      }, wait)
    } else {
      timer = setTimeout(() => {
        func.apply(this, args)
      }, wait)
    }
  }
}

/**
 * 验证手机
 * @param { string } value
 */
export const isMPStrict = (value: string): boolean =>
  /^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-7|9])|(?:5[0-3|5-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[1|8|9]))\d{8}$/g.test(value)

/**
 * 单张图片预加载
 * @param { string } url
 */
export const preloadImg = (url: string): void => {
  const img = new Image()
  if (img.complete) {
    return
  }
  img.onload = (): void => {
    img.onload = null //防止循环引用
  }
  img.src = url
}

/**
 * 多张图片预加载
 * @param { string } url
 */
export const preloadAllImg = (): void => {
  const imgList: string[] = ['https://nba75th.ihyx.net/newyearbox/images/home_bg.jpg', 'https://nba75th.ihyx.net/newyearbox/images/hu.png']
  const promiseAll = imgList.map((item: string) => {
    return new Promise(function (resolve) {
      const img = new Image()
      img.onload = (): void => {
        img.onload = null
        resolve(img)
      }
      img.src = item
    })
  })
  Promise.all(promiseAll)
}

/**
 *  20位随机英文数字
 * @returns string
 */
export const getRandomAlphaNum = (): string => {
  let rdmString = ''
  for (; rdmString.length < 20; rdmString += Math.random().toString(36).substr(2));
  return rdmString.substr(0, 20)
}
