import * as path from 'path';
import { defineConfig } from 'vite'
import svgr from 'vite-plugin-svgr';
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), svgr({ include: "**/*.svg?react" })],
  	resolve: {
		alias: [
			{ find: '@hooks', replacement: path.resolve(__dirname, 'src/hooks') },
			{ find: '@utils', replacement: path.resolve(__dirname, 'src/utils') },
			{ find: '@pages', replacement: path.resolve(__dirname, 'src/pages') },
			{ find: '@css', replacement: path.resolve(__dirname, 'src/assets/css') },
			{ find: '@img', replacement: path.resolve(__dirname, 'src/assets/images') },
			{ find: '@providers', replacement: path.resolve(__dirname, 'src/providers') },
			{ find: '@resources', replacement: path.resolve(__dirname, 'src/resources') },
			{ find: '@components', replacement: path.resolve(__dirname, 'src/components') },
		],
	},
})
