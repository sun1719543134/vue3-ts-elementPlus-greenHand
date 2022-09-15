import { createPinia } from "pinia";
import piniaPluginPersist from 'pinia-plugin-persist'//pinia持久化储存
const pinia = createPinia();
pinia.use(piniaPluginPersist)//状态管理pinia使用持久化储存
export default pinia;