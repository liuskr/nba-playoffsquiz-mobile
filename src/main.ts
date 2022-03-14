import { createApp } from 'vue'
import App from './App.vue'
import router from './routes'
import '@styles/global.scss'
import 'lib-flexible'
const app = createApp(App)
app.use(router)
app.mount('#app')
