import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/index.css'
import "@fortawesome/fontawesome-free/css/all.css"; 

import App from './App.vue'

import router from './routes';

const pinia = createPinia()

const app = createApp(App)
app.use(router)
app.use(pinia)

app.mount('#app')
