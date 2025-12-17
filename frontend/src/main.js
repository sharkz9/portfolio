import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './styles.css'
import { initBackground } from './bg'

createApp(App).use(router).mount('#app')

// run background after DOM mount
setTimeout(() => initBackground(), 200)
