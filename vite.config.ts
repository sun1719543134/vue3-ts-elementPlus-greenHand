import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import VueSetupExtend from 'vite-plugin-vue-setup-extend'
import AutoImport from 'unplugin-auto-import/vite'//自动导入
import Components from 'unplugin-vue-components/vite'//自动导入
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'//ElementPlus引入

import Icons from 'unplugin-icons/vite'//自动导入 ElementPlus icon 图标
import IconsResolver from 'unplugin-icons/resolver'//自动导入 ElementPlus icon 图标

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/taobaoapi': {
        target: 'http://api.m.taobao.com', // 实际请求地址
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/taobaoapi/, ""),
      },
    },
  },
  plugins: [
    vue(),
    AutoImport({
      // 自动导入 Element Plus 相关函数，如：ElMessage, ElMessageBox... (带样式)
      resolvers: [
        ElementPlusResolver(),
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        }),
      ],
    }),
    VueSetupExtend(),
    Components({
      resolvers: [
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
        // 自动导入 Element Plus 组件
        ElementPlusResolver()
      ]
    }),
    Icons({
      autoInstall: true
    })

  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
