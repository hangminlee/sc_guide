import remarkCallout from '@r4ai/remark-callout';
import adapter from '@sveltejs/adapter-cloudflare';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';
import { mdsvex } from 'mdsvex';
import rehypeRaw from 'rehype-raw';
import rehypeStringify from 'rehype-stringify';
import remarkFootnotes from 'remark-footnotes';
import remarkGfm from 'remark-gfm';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	extensions: ['.svelte', '.md', '.svx'],
	preprocess: [
		vitePreprocess({}),
		mdsvex({
			extensions: ['.md', '.svx'],
  		remarkPlugins: [
				remarkGfm,
				remarkFootnotes,
  		  // ... other remark plugins
  		],
  		rehypePlugins: [
			],
				})
		],
	kit: {
		adapter: adapter()
	}
};

export default config;