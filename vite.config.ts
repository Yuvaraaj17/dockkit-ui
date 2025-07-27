import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
console.log('LOADED ENV:', process.env.GITHUB_PAT);
export default defineConfig({
	server: {
		hmr: false,
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
