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
		max-width: 56rem;
		background-color: #0a0e14;
		margin: 0 auto;
		box-sizing: border-box;
		font-family: monospace;
		display: flex;
		flex-direction: column;
		/* font-size: 1.3rem; */
	}

	ul, ol, li {
  margin-left: 1rem;
  font-size: 1rem;
	list-style-type: none;
	
}

li::before {
	content: '*'
}

	h1 {
		margin: 0;
		text-align: center;
		color: white;

	}

	header {
		margin: 1rem 0 2.3rem 0;
		display: flex;
		flex-direction: column;
		align-items: center;
		padding: 1rem;
		border-radius: 1rem;
		background-color: #12161c;
	}

	#date {
		font-style: italic;
		color: #8e969f;
	}

	h2 {
		font-weight: bold;
		padding: .5rem;
		color: #daff24;
	}

	main {
		display: block;
	}


</style>


<!-- \\\\\\\\\\\\\\\\\\Tremplate///////////////////// -->
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
