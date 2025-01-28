import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // 指定正確的 PostCSS 配置
  },
  plugins: [react()],
  server: {
    watch: {
      // 確保 Vite 不會忽略 Tailwind 和自訂插件相關文件
      ignored: ['!**/tailwind.config.js', '!**/customPlugin.js', '!**/desktopStyle.js','!**/mediaStyle.js'],
    },
  },
});
