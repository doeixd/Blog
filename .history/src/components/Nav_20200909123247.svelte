<script>
	import { onMount } from 'svelte'

	const hideNav = _ => {
		let last_known_scroll_position = 0;
		let ticking = false;

		window.addEventListener('scroll', function(e) {
			if (!ticking) {
				window.requestAnimationFrame(function() {
					if (last_known_scroll_position < window.scrollY) document.getElementById('nav').style.display = 'none'
					if (last_known_scroll_position > window.scrollY) document.getElementById('nav').style.display = 'initial'
					ticking = false
					last_known_scroll_position = window.scrollY;
				})
				ticking = true
			}
		});
	}
	
	
	onMount(hideNav)

	export let segment;

</script>

<style>
	nav {
		border-bottom: 2px solid rgba(255,62,0,0.1);
		font-weight: 300;
		padding: 0 1em;
		position: fixed;
		bottom: 2px;
		font-size: 1.25em;
		font-family: monospace;
		background-color: #0a0e14;
		border-radius: 5px;
		z-index: 2;
	}

	ul {
		margin: 0;
		padding: 0;
		max-width: 16em;
	}

	/* clearfix */
	ul::after {
		content: '';
		display: block;
		clear: both;
	}

	li {
		display: block;
		float: left;
		max-width: 4em;
	}

	a:hover::after {
		position: absolute;
		content: '';
		width: 100%;
		height: 3px;
		background-color: #FF8F40;
		display: block;
		bottom: -1px;
	}

	[aria-current] {
		position: relative;
		display: inline-block;
	}

	[aria-current]::after {
		position: absolute;
		content: '';
		width: calc(100% - 1em);
		height: 3px;
		background-color: #FF8F40;
		display: block;
		bottom: -1px;
	}

	a {
		text-decoration: none;
		padding: 0.7em 0.55em;
		display: block;
		font-weight: 400;
		color: inherit;
		/* position: absolute; */
	}
</style>

<nav id='nav'>
	<ul>
		<li><a arel=prerender aria-current='{segment === undefined ? "page" : undefined}' href='.'>home</a></li>
		<li><a rel=prerender aria-current='{segment === "about" ? "page" : undefined}' href='about'>about</a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prerender aria-current='{segment === "blog" ? "page" : undefined}' href='blog'>blog</a></li>
		<li><a rel=prerender aria-current='{segment === "uses" ? "page" : undefined}' href='uses'>uses</a></li>
		
	</ul>
</nav>
