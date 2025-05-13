import { type ConfigEnv, defineConfig, mergeConfig } from 'vitest/config';
import baseViteConfig from './vite.config';

export default defineConfig(async (configEnv: ConfigEnv) => {
  const baseConfig = await baseViteConfig(configEnv);

  return mergeConfig(
    baseConfig,
    defineConfig({
      test: {
        globals: true, // テスト関数のimportを省略
      },
    }),
  );
});