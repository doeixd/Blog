<script>
	import Nav from '../components/Nav.svelte';

	export const title;
	export let segment;

console.log('segment', segment)

</script>

<style>
	main {
		position: relative;
		max-width: 56em;
		background-color: #0a0e14;
		padding: 1em;
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
<title>{title}</title>
</svelte:head>


<Nav {segment}/>

<main>
	<h1>Title</h1>
	
	<slot></slot>
</main>
