<script>
import highlight from 'code-lightner'




export let code;

let highlightedCode = async (code, lang) => {
    
    let config =
    {
        grammarFiles: [ // Required, list of the grammar file to load
            "./src/components/highlights/JavaScript.tmLanguage.json",
            "./src/components/highlights/css.tmLanguage.json",
            "./src/components/highlights/JavaScriptReact.tmLanguage.json",
            "./src/components/highlights/TypeScript.tmLanguage.json",
            "./src/components/highlights/TypeScriptReact.tmLanguage.json"
        ],
        scopeName: "source." + lang, // Required, name of the scope to use on the provided code
        themeFile: "./src/components/highlights/ayu-dark.json" // Required, path of the theme file
    };
    
    
    return  await highlight.lighten(config, code) 
    
    } 
console.log(highlightedCode)

</script>

<code>
  <h1>cool</h1>
  <slot>
  let config =
    {
        grammarFiles: [ // Required, list of the grammar file to load
            "./src/components/highlights/JavaScript.tmLanguage.json",
            "./src/components/highlights/css.tmLanguage.json",
            "./src/components/highlights/JavaScriptReact.tmLanguage.json",
            "./src/components/highlights/TypeScript.tmLanguage.json",
            "./src/components/highlights/TypeScriptReact.tmLanguage.json"
        ],
        scopeName: "source.javascript", // Required, name of the scope to use on the provided code
        themeFile: "./src/components/highlights/ayu-dark.json" // Required, path of the theme file
    };u
  
  </slot>
</code>
