import './assets/styles/main.css'
import './assets/styles/plugins.css'
import './assets/styles/responsive.css'
import './assets/styles/effect.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

// https://ckeditor.com/docs/ckeditor5/latest/installation/integrations/vuejs-v3.html
import CKEditor from '@ckeditor/ckeditor5-vue'

const app = createApp(App)

app.use(router)
app.use(CKEditor)
app.mount('#app')
