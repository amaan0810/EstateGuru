import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/test': 'http://localhost:3000/api/user',
      '/api/auth/signup': {
        target :'http://localhost:3000',
        secure : false,
      },
    },
  },
  plugins: [react()],
});
