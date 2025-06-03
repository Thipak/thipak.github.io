import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const app = createApp(App)

app.use(createPinia())
app.use(router)
gsap.registerPlugin(ScrollTrigger);

app.mount('#app')
