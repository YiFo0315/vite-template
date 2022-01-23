import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/_base.scss'
import './assets/css/setting.css'
import './assets/css/global.css'

import { i18n } from './i18n'

const app = createApp(App)

app.use(router)
app.use(store)
app.use(naive)
app.use(i18n)

app.mount('#app')

export default app
