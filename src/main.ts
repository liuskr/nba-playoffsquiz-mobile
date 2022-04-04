import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import login from '@components/Login/index'

import '@styles/global.scss'
import 'lib-flexible'
const app = createApp(App)
app.use(router)
app.use(login)
app.mount('#app')
