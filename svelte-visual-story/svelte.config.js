// svelte.config.js
import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      strict: false
    }),
    prerender: {
      entries: ['*'],
      handleHttpError: ({ status, path }) => {
        if (status === 404) {
          console.warn(`⚠️ Ignorando 404 durante o prerender em: ${path}`);
          return;
        }
        throw new Error(`${status} em ${path}`);
      }
    }
  }
};
