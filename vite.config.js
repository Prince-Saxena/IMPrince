import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: process.env.NODE_ENV === "production" ? "/REPO_NAME/" : "/",
	plugins: [
		tailwindcss(),
		react({
			include: "**/*.{jsx,tsx}", // explicitly include JSX files
		}),
	],
	server: {
		headers: {
			"Content-Type": "application/javascript", // ensure correct MIME type
		},
	},
});
