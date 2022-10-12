import { createApp } from 'vue'
import { createPinia } from 'pinia'
import Antd from 'ant-design-vue';
import App from './App.vue'
import router from './router'

import './assets/main.css'
import 'ant-design-vue/dist/antd.css';
import 'virtual:windi.css'
import 'ant-design-vue/dist/antd.less';
import 'ant-design-vue/dist/antd.variable.min.css'; // 动态切换主题

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(Antd)
app.mount('#app')
