import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})



// export default defineConfig({
//   server: {
//     proxy: {
//       '/api': {
//         target: 'https://afe-52zn.onrender.com',
//         changeOrigin: true,
//         secure: false,
//         rewrite: (path) => path.replace(/^\/api/, '')
//       }
//     }
//   }
// });
