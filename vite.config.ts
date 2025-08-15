import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
export default defineConfig({
	server: {
		watch: {
			ignored: ['**/node_modules/**', '**/pkg/**']
		}
	},
	plugins: [tailwindcss(), sveltekit()],
	 build: {
    rollupOptions: {
      external: ['fsevents'], // 👈 Mark as external
    },
  },
  optimizeDeps: {
	exclude: ['fsevents', 'vite'],
	include: ['svelte-select', 'flowbite-svelte-icons']
  }
});
