import './assets/index.css'
import './assets/main.css'

import { createApp } from 'vue'
import naive from 'naive-ui'
import App from './App.vue'
import router from './router'
import store from './store'
import globalHelpers from './plugins/globalHelpers'

const app = createApp(App)

app.use(router)
    .use(store)
    .use(globalHelpers)
    .use(naive)
    
app.mount('#app')
