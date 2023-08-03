import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import {getCategoryAPI}from '@/apis/testAPI.JS'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

getCategoryAPI().then(res =>{
    console.log(res)
})