import path from "path";
import react from "@vitejs/plugin-react-swc";
import mdx from "@mdx-js/rollup";
import { defineConfig } from "vite";

export default defineConfig({
	plugins: [
		{
			enforce: "pre",
			...mdx(),
		},
		react(),
	],
	resolve: {
		alias: {
			"@": path.resolve(__dirname, "./src"),
		},
	},
});
