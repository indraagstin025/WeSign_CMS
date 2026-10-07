import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function cleanDistPlugin() {
    return {
        name: 'clean-dist-backend-artifacts',
        closeBundle() {
            const unwanted = ['index.php', '.htaccess', 'hot', 'build'];
            for (const item of unwanted) {
                const itemPath = path.resolve(__dirname, 'dist', item);
                if (fs.existsSync(itemPath)) {
                    fs.rmSync(itemPath, { recursive: true, force: true });
                }
            }
        },
    };
}

export default defineConfig({
    plugins: [react(), cleanDistPlugin()],
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './resources/js'),
        },
    },
    build: {
        outDir: 'dist',
        emptyOutDir: true,
    },
    publicDir: 'public',
});

