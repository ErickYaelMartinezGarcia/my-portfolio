import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path';

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'vue': path.resolve(__dirname, 'node_modules/vue/dist/vue.esm-bundler.js')
    }
  }
});