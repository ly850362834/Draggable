import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';

// const app=createApp(App).use(store).use(ElementPlus).use(router).mount('#app');
// .use(store).use(ElementPlus).use(router).mount('#app')
const app=createApp(App);
app.use(ElementPlus);
app.mount('#app')