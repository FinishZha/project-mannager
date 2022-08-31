import { createPinia } from 'pinia'
// 引入持久化插件
import piniaPluginPersist from 'pinia-plugin-persist'
//创建pinia实例
const store = createPinia()
// 使用该插件
store.use(piniaPluginPersist)
//导出
export default store


