import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VueKinesis from 'vue-kinesis'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VueKinesis)

app.mount('#app')
