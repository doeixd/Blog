<script>
	import Nav from '../components/Nav.svelte';

	export let title;
	export let date;


</script>

<style>


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
