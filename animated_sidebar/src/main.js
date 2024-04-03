// import './assets/main.css'
import './assets/fira_sans.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router).mount('#app')

// app.mount('#app')
