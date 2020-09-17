<script>
	import Nav from '../components/Nav.svelte';

	export let segment;


</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #0a0e14;
		padding: 2rem 1rem 1rem 1rem;
		margin: 0 auto;
		box-sizing: border-box;
		font-family: monospace;
		display: flex;
		flex-direction: column;
		align-items: center;
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
