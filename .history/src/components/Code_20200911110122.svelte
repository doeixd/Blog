<script>
import highlight from 'code-lightner'


let config =
    {
        grammarFiles: [ // Required, list of the grammar file to load
            "./highlights/JavaScript.tmLanguage.json",
            "./syntaxes/SQL.plist",
            "./syntaxes/hello.json",
            "./syntaxes/fsharp.json"
        ],
        scopeName: "source.fsharp", // Required, name of the scope to use on the provided code
        themeFile: "../themes/OneDark-Pro.json" // Required, path of the theme file
    };

code.lighten(config, sourceCode)
    .then(function(html) {
        console.log(html);
    });


export let code;
</script>

<code>
{code}
</code>