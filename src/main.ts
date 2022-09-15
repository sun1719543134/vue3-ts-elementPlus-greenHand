import { createApp } from 'vue'
import pinia from "./stores/store"//

import App from './App.vue'
import router from './router'//引入路由router

import 'element-plus/theme-chalk/dark/css-vars.css'//element-plus暗黑模式使用
import './styles/bright-css-vars.css'//自定义白天模式变量
import './styles/dark-css-vars.css'//自定义暗黑模式变量,可覆盖element-plus变量

const app = createApp(App)

app.use(pinia)//使用状态管理
app.use(router)//使用路由

app.mount('#app')
