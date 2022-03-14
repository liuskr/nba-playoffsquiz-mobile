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
