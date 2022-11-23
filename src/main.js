import { createApp } from 'vue'
import App from './App.vue'
import Intro from './Roomintro.vue'
import router from './router'

//import './assets/main.css'

const app = createApp(Intro/* App */)

app.use(router)

app.mount('#app')
