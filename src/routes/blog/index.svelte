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

	svg {
		fill: #f1f3ec;
		transition: .25s ease-out;
	}

	svg:hover{
		fill: #ff7420;
		transform: scale3d(1.4)
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>
 
<h1>Recent posts
<a href='blog/feed'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M6.503 20.752c0 1.794-1.456 3.248-3.251 3.248-1.796 0-3.252-1.454-3.252-3.248 0-1.794 1.456-3.248 3.252-3.248 1.795.001 3.251 1.454 3.251 3.248zm-6.503-12.572v4.811c6.05.062 10.96 4.966 11.022 11.009h4.817c-.062-8.71-7.118-15.758-15.839-15.82zm0-3.368c10.58.046 19.152 8.594 19.183 19.188h4.817c-.03-13.231-10.755-23.954-24-24v4.812z"/></svg></a>
</h1>
<ul>
	{#each posts as post}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
				<li><a rel='prefetch' href='blog/{post.slug}'> {post.title}</a><span class='date'> {post.date} </span> </li>
	{/each}
</ul>