<script>
import highlight from 'code-lightner'




export let code;

let highlightedCode = async (code, lang) => {
    
    
    
    
    return  await highlight.lighten(config, code) 
    
    } 
console.log(highlightedCode)

</script>

<code>
  {highlightedCode}
  <h1>cool</h1>
  <slot></slot>
</code>
