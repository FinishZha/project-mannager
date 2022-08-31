import { defineConfig } from 'vite'
import { resolve } from "path";
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'

// 其他配置参考 https://vitejs.dev/config/
export default defineConfig({
    css: {
        preprocessorOptions: {
            less: {
                javascriptEnabled: true
            }
        }
    },
  plugins: [
      vue(),
      AutoImport({
          imports: []
      })
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"), // 路径别名
    },
    extensions: [".js", ".json", ".ts"], // 使用路径别名时想要省略的后缀名,可以自己 增减
  },
})
