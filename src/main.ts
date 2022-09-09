import { createApp } from 'vue'
import { createPinia } from 'pinia'//引入状态管理pinia
import piniaPluginPersist from 'pinia-plugin-persist'//pinia持久化储存
import App from './App.vue'
import router from './router'//引入路由router

import 'element-plus/theme-chalk/dark/css-vars.css'//element-plus暗黑模式使用
import './styles/bright-css-vars.css'//自定义白天模式变量
import './styles/dark-css-vars.css'//自定义暗黑模式变量,可覆盖element-plus变量

const app = createApp(App)
const store = createPinia()
store.use(piniaPluginPersist)//状态管理pinia使用持久化储存
app.use(store)//使用状态管理
app.use(router)//使用路由

app.mount('#app')
