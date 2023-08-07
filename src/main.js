import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'


import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')
import {getCategoryAPI}from '@/apis/testAPI.JS'

getCategoryAPI().then(res =>{
    console.log(res)
})