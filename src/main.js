import './assets/styles/main.css'
import './assets/styles/plugins.css'
import './assets/styles/responsive.css'
import './assets/styles/effect.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')
