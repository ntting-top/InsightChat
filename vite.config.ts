import type { UserConfig } from 'vite'
import { one } from 'one/vite'
import { tamaguiPlugin } from '@tamagui/vite-plugin'
import { resolve } from 'path'

// 创建一个最小化的环境变量集合
const safeEnv = {
  NODE_ENV: process.env.NODE_ENV || 'production',
};

export default {
  base: '/InsightChat/', 
  plugins: [
    one({
      web: {
        defaultRenderMode: 'ssg',
      },
    }),
    tamaguiPlugin({
      components: ['tamagui'],
      config: './config/tamagui/tamagui.config.ts',
    }),
  ],
  define: {
    'process.env': JSON.stringify(safeEnv)
  },
  resolve: {
    alias: {
      'react-native': 'react-native-web',
    },
  },
  optimizeDeps: {
    esbuildOptions: {
      mainFields: ['module', 'main'],
      resolveExtensions: ['.web.js', '.js', '.ts', '.jsx', '.tsx'],
    },
  },

  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'app/index.tsx'),
      },
      external: ['react-native'],
    }
  }
} satisfies UserConfig
