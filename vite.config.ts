import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsPaths from "vite-tsconfig-paths"
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsPaths()],
  assetsInclude: ['**/*.JPG'],
})
