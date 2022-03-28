import type { ConfigEnv, UserConfigExport } from 'vite'
import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import viteCompression from 'vite-plugin-compression'
import path from 'path'
// import legacy from '@vitejs/plugin-legacy'
import { viteVConsole } from 'vite-plugin-vconsole'

const resolve = (name: string): string => path.resolve(__dirname, name)

export default ({ command, mode }: ConfigEnv): UserConfigExport => {
  return defineConfig({
    base: loadEnv(mode, process.cwd()).VITE_APP_PATH,
    plugins: [
      vue(),
      styleImport({
        libs: [
          {
            libraryName: 'vant',
            esModule: true,
            resolveStyle: (name): string => `vant/es/${name}/style`
          }
        ]
      }),
      viteCompression({
        verbose: true,
        disable: false,
        threshold: 10240,
        algorithm: 'gzip',
        ext: '.gz'
      }),

      // legacy({
      //   targets: ['ie >= 11'],
      //   additionalLegacyPolyfills: ['regenerator-runtime/runtime']
      // }),
      viteVConsole({
        entry: resolve('src/main.ts'),
        localEnabled: command === 'serve',
        enabled: command === 'build' && mode === 'test',
        config: {
          maxLogNumber: 1000,
          theme: 'light'
        }
      })
    ],
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `@import "@styles/variables.scss";`
        }
      }
    },
    resolve: {
      alias: [
        { find: '@src', replacement: resolve('src') },
        { find: '@utils', replacement: resolve('src/utils') },
        { find: '@pages', replacement: resolve('src/pages') },
        { find: '@components', replacement: resolve('src/components') },
        { find: '@styles', replacement: resolve('src/styles') },
        { find: '@apis', replacement: resolve('src/apis') },
        { find: '@assets', replacement: resolve('src/assets') }
      ]
    },
    build: {
      target: 'es2015',
      outDir: 'dist',
      assetsDir: 'assets',
      chunkSizeWarningLimit: 1000,
      cssCodeSplit: true,
      sourcemap: false,
      rollupOptions: {
        output: {
          manualChunks(id) {
            if (id.includes('node_modules')) {
              return id.toString().split('node_modules/')[1].split('/')[0].toString()
            }
          }
        }
      },
      terserOptions: {
        compress: {
          drop_console: true,
          drop_debugger: true
        }
      }
    },
    server: {
      open: true,
      port: 7000,
      proxy: {
        '/dev': {
          target: 'https://nba.ihyx.net/',
          changeOrigin: true,
          rewrite: (path) => path.replace(/^\/dev/, '')
        }
      }
    }
  })
}
