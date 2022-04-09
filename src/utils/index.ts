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
 *  是否在webview打开
 * @returns Boolean
 */

export const openInWebview = (): boolean => {
  const ua = navigator.userAgent.toLowerCase()
  // @ts-ignore
  if (ua.match(/MicroMessenger/i) === 'micromessenger') {
    // 微信浏览器判断
    return false
    // @ts-ignore
  } else if (ua.match(/QQ/i) === 'qq') {
    // QQ浏览器判断
    return false
    // @ts-ignore
  } else if (ua.match(/WeiBo/i) === 'weibo') {
    return false
  }
  if (ua.match(/Android/i) !== null) {
    return ua.match(/browser/i) === null
  } else if (ua.match(/iPhone/i) !== null) {
    return ua.match(/safari/i) === null
  }
  return ua.match(/macintosh/i) === null && ua.match(/windows/i) === null
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
  const imgList: string[] = [
    '/images/loading_bg.jpg',
    '/images/fiexd.png',
    '/images/guessing_bg.jpg',
    '/images/guess_logo.jpg',
    '/images/guide_1.png',
    '/images/guide_2.png',
    '/images/guide_3.png',
    '/images/guide_4.png',
    '/images/guide_5.png',
    '/images/guide_6.png',
    '/images/guide_7.png',
    '/images/home_1.png',
    '/images/home_2.png',
    '/images/home_3.png',
    '/images/home_4.png',
    '/images/home_bg.jpg',
    '/images/rules.png',
    '/images/prize.png',
    '/images/timi.png',
    '/images/list_title.jpg',
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '/images/4.png',
    '/images/5.png',
    '/images/6.png',
    '/images/7.png',
    '/images/8.png',
    '/images/9.png',
    '/images/hand.png',
    '/images/point.png'
  ]
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
