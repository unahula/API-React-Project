import { defineConfig } from 'vite';
import { nodePolyfills } from 'vite-plugin-node-polyfills';

export default defineConfig({
  plugins: [
    nodePolyfills({
      globals: {
        crypto: true
      }
    })
  ],
  test: {
    globals: true,
    environment: 'jsdom'
  }
});