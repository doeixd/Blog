<script context="module">
	export function preload({ params, query }) {
		return this.fetch('/blog/feed').then(() => { return this.fetch(`blog.json`)} ).then(r => r.json()).then(posts => {
			
			return { posts };
		});
	}
</script>

<script>
	export let posts;
</script>

<style>
	ul {
		margin: 0 auto 1em auto;
		line-height: 1.5;
		font-size: 1.1rem;
		font-weight: bold;
		display: block;
		width: 23rem;
		min-width: fit-content;
		max-width: -webkit-fill-available;
	}
	li {
		display: flex;
		justify-content: space-between !important;
		gap: min(1em, 100%);
	}
	a {
		font-weight: bold;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Recent posts</h1>
<h4><a href='blog/feed'>RSS</a></h4>

<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
				<li><a rel='prefetch' href='blog/{post.slug}'> {post.title}</a><span class='date'> {post.date} </span> </li>
	{/each}
</ul>