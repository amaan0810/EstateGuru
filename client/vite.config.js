import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/test': 'http://localhost:3000/api/user',
      
      '/api/auth/signup': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/api/auth/signin': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/api/auth/google': {
        target: 'http://localhost:3000',
        secure: false,
      },
      '/api/auth/':{
        target: "http://localhost:3000",
        secure: false,
      },
      '/api/user/update/':{
        target: "http://localhost:3000",
        secure: false,
      },
      '/api/user/delete/':{
        target: "http://localhost:3000",
        secure: false,
      }
    },
  },
  plugins: [react()],
});
