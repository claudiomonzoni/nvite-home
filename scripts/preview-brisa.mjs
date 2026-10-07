import { createServer } from 'vite';
import react from '@vitejs/plugin-react';
const server = await createServer({
  configFile: false,
  plugins: [react()],
  server: { host: '127.0.0.1', port: 4323, strictPort: true },
  css: { preprocessorOptions: { scss: { silenceDeprecations: ['import', 'global-builtin', 'color-functions'] } } },
});
await server.listen();
console.log('Brisa isolated component preview: http://127.0.0.1:4323/.brisa-preview/');
