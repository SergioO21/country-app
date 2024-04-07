import path from "path";
import { fileURLToPath } from "url";
import globals from "globals";
import tseslint from "typescript-eslint";
import { FlatCompat } from "@eslint/eslintrc";
import pluginJs from "@eslint/js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const compat = new FlatCompat({ baseDirectory: __dirname, recommendedConfig: pluginJs.configs.recommended });

export default {
	files: ["**/*.js"],
	languageOptions: {
		sourceType: "module",
		globals: globals.browser
	},
	extends: [
		...compat.extends("standard-with-typescript"),
		...tseslint.configs.recommended
	]
};
