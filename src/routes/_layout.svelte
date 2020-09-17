<script>
	import Nav from '../components/Nav.svelte';

	export let segment;


</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		padding: 2rem 2ch 0 2ch;
		margin: 0 auto;
		font-family: monospace;
	}
</style>


<!-- \\\\\\\\\\\\\\\\\\Template///////////////////// -->
<svelte:head>
<title>{segment}</title>
</svelte:head>


<Nav {segment}/>

<main>
	<slot></slot>
</main>
