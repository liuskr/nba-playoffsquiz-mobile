import CryptoJS from 'crypto-js'

/**
 *
 * @param word 需要加密的数据
 * @returns
 */
export const encryptApp = (word: string): string => {
  const key = CryptoJS.enc.Utf8.parse(window.atob('dExraXl6ekJtQTQ4dWhvcmtRNzM2K2p2anVFV1A1MGg='))
  const iv = CryptoJS.enc.Utf8.parse(window.atob('AQIDBAUGBwgJNQECAwQFFg=='))
  const srcs = CryptoJS.enc.Utf8.parse(word)
  const encrypted = CryptoJS.AES.encrypt(srcs, key, {
    iv: iv,
    mode: CryptoJS.mode.CBC,
    padding: CryptoJS.pad.Pkcs7
  })
  return encrypted.toString()
}

/**
 *
 * @param request 请求参数
 * @returns 加盐结果
 */
export const getSignData = (request: string): string => {
  const timestamp: number = new Date().getTime()
  const a = 'OigtUt',
    b = 'SkV4',
    c = 'hapDRd'
  const encrypted = CryptoJS.MD5(`/api/guess{${request}}${a}${b}${c}${timestamp}`)
  return encrypted.toString()
}
