<script>
import highlight from 'code-lightner'


let config =
    {
        grammarFiles: [ // Required, list of the grammar file to load
            "./src/components/highlights/JavaScript.tmLanguage.json",
            "./src/components/highlights/css.tmLanguage.json",
            "./src/components/hightlights/JavascriptReact.tmLanguage.json",
            "./src/components/TypeScript.tmLanguage.json",
            "./src/TypeScriptReact.tmLanguage.json"
        ],
        scopeName: "source.javascriptvasicripuuujkit", // Required, name of the scope to use on the provided code
        themeFile: "./highlights/ayu-dark.json" // Required, path of the theme file
    };

export let code;

let highlightedCode =(async () => {return  await highlight.lighten(config, code) } )()
console.log(highlightedCode)

</script>

<code>
  {highlightedCode}
  <h1>cool</h1>
  <slot></slot>
</code>
