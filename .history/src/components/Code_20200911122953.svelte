<script>
import highlight from 'code-lightner'



export let code;


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

return (async () => {
	let res = await highlight.lighten(config, code)
	console.log('res', res)
	return res
} )()
}



</script>

<code>
  <h1>cool</h1>
  <slot {item}>
  
  </slot>
</code>
