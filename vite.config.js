import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
	plugins: [react(), tailwindcss()],
	base: "/Prince-Saxena.github.io/",
	publicDir: "public",
	build: {
		rollupOptions: {
			input: {
				main: "index.html",
			},
		},
		outDir: "dist",
		emptyOutDir: true,
	},
});
