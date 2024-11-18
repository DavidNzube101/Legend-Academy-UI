import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles/tailwind.css' // Assuming this is where your Tailwind CSS is imported

createApp(App).use(router).mount('#app')