import { createApp } from 'vue'
import App from './App.vue'
// import router from './router'
import store from './store'
import ElementPlus from 'element-plus';
import 'element-plus/lib/theme-chalk/index.css';
import '@/assets/less/main.less'
import draggable from "@/components/draggable-next/draggable.vue";
import renderEngine from '@/components/render-engine/index.vue';

const app=createApp(App);
app.use(ElementPlus);
app.use(store);
app.component('draggable', draggable);
app.component('renderEngine', renderEngine);
app.mount('#app');