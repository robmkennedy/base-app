import { defineConfig, type UserConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vite.dev/config/
export default defineConfig({
    plugins: [react(), tsconfigPaths()],
    base: '/base-app/',
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/test/vitest.setup.ts'
    }
} as UserConfig)
