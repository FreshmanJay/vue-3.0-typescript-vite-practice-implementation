import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// 引入 ElementPlus 插件(npm i element-plus)
import ElementPlusPlugin from '@/plugins/element-plus'

// 全局注册 ElementPlus 图标组件(npm install @element-plus/icons-vue)
import * as ElementPlusIcons from '@element-plus/icons-vue'
for(const [key, component] of Object.entries(ElementPlusIcons)) {
  createApp(App).component(key, component)
}

createApp(App).use(ElementPlusPlugin).mount('#app')