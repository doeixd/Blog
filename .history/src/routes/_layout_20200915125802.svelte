<script>
	import Nav from '../components/Nav.svelte';

	export let title;
	export let segment;
	export let date;

	
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
	{#if title}
	<h1>{title}</h1>
	<div>{date}</div>
	{/if}
	<slot></slot>
</main>
