import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

export default defineConfig({
  css: {
    postcss: './postcss.config.cjs', // 指定正確的 PostCSS 配置
  },
  plugins: [react()],
  server: {
    host: true, // 允許外部訪問
    port: 5173,
  }
});
