<script>
	import Nav from '../components/Nav.svelte';

	export let title;
	export let segment;
	export let date;

console.log('title', title)
console.log('date', date)	
console.log('segment', segment)

</script>

<style>
	#post {
		position: relative;
		max-width: 56em;
		background-color: #0a0e14;
		margin: 0 auto;
		box-sizing: border-box;
		font-family: monospace;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	h1 {
		margin: 0;
		text-align: center;
		text-decoration: 

	}

	header {
		margin-bottom: 1em;
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	#date {
		font-style: italic;
	}

</style>


<!-- \\\\\\\\\\\\\\\\\\Template///////////////////// -->
<svelte:head>
<title>{title}</title>
</svelte:head>



<div id='post'>
	{#if title}
	<header>
		<h1>{title}</h1>
		<div id='date'>{date}</div>
	</header>
	{/if}
	<slot></slot>
</div>
