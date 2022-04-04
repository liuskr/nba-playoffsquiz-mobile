/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import Login from './index.vue'
import { createApp } from 'vue'

export default {
  install: (app: any): void => {
    //1、实例化并绑定组件
    const plugin = createApp(Login)
    const instance = plugin.mount(document.createElement('div'))

    //2.将挂载的Node添加到body中
    document.body.appendChild(instance.$el)

    //3、定义全局
    app.config.globalProperties.$login = instance
  }
}
