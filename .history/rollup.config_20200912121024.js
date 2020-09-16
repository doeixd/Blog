import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import commonjs from "@rollup/plugin-commonjs";
import svelte from "rollup-plugin-svelte";
import babel from "@rollup/plugin-babel";
import { terser } from "rollup-plugin-terser";
import config from "sapper/config/rollup.js";
import pkg from "./package.json";
import { mdsvex } from "mdsvex";
// import highlight from "remark-highlight.js"
import highlight from 'code-lightner'
const mode = process.env.NODE_ENV;
const dev = mode === "development";
const legacy = !!process.env.SAPPER_LEGACY_BUILD;
const onwarn = (warning, onwarn) =>
	(warning.code === 'MISSING_EXPORT' && /'preload'/.test(warning.message)) ||
	(warning.code === 'CIRCULAR_DEPENDENCY' && /[/\\]@sapper[/\\]/.test(warning.message)) ||
	onwarn(warning);

const extensions = [".svelte", ".svx"];

const highlighter = (code, lang) => {
console.log('code', code)
	console.log('lang', lang)
let config =
    {
        grammarFiles: [ // Required, list of the grammar file to load
            "./src/components/highlights/JavaScript.tmLanguage.json",
            "./src/components/highlights/css.tmLanguage.json",
            "./src/components/highlights/JavaScriptReact.tmLanguage.json",
            "./src/components/highlights/TypeScript.tmLanguage.json",
            "./src/components/highlights/TypeScriptReact.tmLanguage.json"
        ],
        scopeName: `source.${lang}`, // Required, name of the scope to use on the provided code
        themeFile: "./src/components/highlights/ayu-dark.json" // Required, path of the theme file
    };

		let res;




	res = (async () => { await Promise.resolve(really(config, code)) } ) ()
	console.log('res', res)
	return 'hello'
} 


async function really(config, code) {
	return await highlight.lighten(config, code)
}

let test = (code) => code

const opts = {
	smartypants: true,
	layout: './src/routes/_layout.svelte',
  highlight: {
    highlighter,
  }
}

export default {
	client: {
		input: config.client.input(),
		output: config.client.output(),
		plugins: [
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode)
			}),
			svelte({
				extensions,
				dev,
				hydratable: true,
				emitCss: true,
				preprocess: mdsvex(opts)
			}),
			resolve({
				browser: true,
				dedupe: ['svelte']
			}),
			commonjs(),

			legacy &&
			babel({
				extensions: [".js", ".mjs", ".html", ...extensions],
				babelHelpers: "runtime",
				exclude: ["node_modules/@babel/**"],
				presets: [
					[
						"@babel/preset-env",
						{
							targets: "> 0.25%, not dead"
						}
					]
				],
				plugins: [
					"@babel/plugin-syntax-dynamic-import",
					[
						"@babel/plugin-transform-runtime",
						{
							useESModules: true
						}
					]
				]
			}),

			!dev &&
			terser({
				module: true
			})
		],

		onwarn
	},

	server: {
		input: config.server.input(),
		output: config.server.output(),
		plugins: [
			replace({
				"process.browser": false,
				"process.env.NODE_ENV": JSON.stringify(mode)
			}),
			svelte({
				extensions,
				hydratable: true,
				preprocess: mdsvex(opts),
				generate: "ssr",
				dev
			}),
			resolve({
				dedupe: ['svelte']
			}),
			commonjs()
		],
		external: Object.keys(pkg.dependencies).concat(require('module').builtinModules),
		preserveEntrySignatures: 'strict',
		onwarn
	},

	serviceworker: {
		input: config.serviceworker.input(),
		output: config.serviceworker.output(),
		plugins: [
			resolve(),
			replace({
				"process.browser": true,
				"process.env.NODE_ENV": JSON.stringify(mode)
			}),
			commonjs(),
			!dev && terser()
		],
		preserveEntrySignatures: false,
		onwarn
	}
};
