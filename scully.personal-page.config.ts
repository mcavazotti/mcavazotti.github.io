import { ScullyConfig } from '@scullyio/scully';
import '@scullyio/scully-plugin-puppeteer';

export const config: ScullyConfig = {
  projectRoot: './src',
  projectName: 'personal-page',
  distFolder: './dist/personal-page', // output directory of your Angular build artifacts
  outDir: './dist/static', // directory for scully build artifacts
  puppeteerLaunchOptions: {
    args: ['--no-sandbox'],
  },
  defaultPostRenderers: [],
  routes: {
    '/projects/:id': {
      type: 'contentFolder',
      id: {
        folder: "./content/projects"
      }
    },
    '/blog/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./content/blog"
      }
    },
    '/projects/:slug': {
      type: 'contentFolder',
      slug: {
        folder: "./content/projects"
      }
    },
  },
};