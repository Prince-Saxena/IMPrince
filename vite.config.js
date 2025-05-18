import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
	base: process.env.NODE_ENV === "production" ? "/https://prince-saxena.github.io//" : "/",
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
		middleware: {
			// This is a hypothetical example; actual implementation may vary
			jsx: (req, res, next) => {
				if (req.url.endsWith(".jsx")) {
					res.setHeader("Content-Type", "application/javascript");
				}
				next();
			},
		},
	},
});
