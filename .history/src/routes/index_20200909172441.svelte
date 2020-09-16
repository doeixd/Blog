<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.8em;
		text-transform: uppercase;
		font-weight: 700;
		padding-bottom: 0.5em;
	}

	figure {
		margin: -10% 0 1em 0;
		filter: drop-shadow(0 0 1em #1c1c2c);
		clip-path: circle(20% at 56% 36%);

		
		shape-outside: circle(20% at 56% 36%);
		overflow: hidden;
	}

	img {
		margin: 0 0 1em 0;
		width: 10vw;
		border-radius: 100%;
		float: left;
		clip-path: circle()
	}


	img:hover {
		transform: rotateZ(.02turn) scale(1.03);
		
		filter: drop-shadow(0 0 1em #1f1f2c)

	}

	p {
		margin: 1em auto;
	}



	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
	}
</style>

<svelte:head>
	<title>Patrick W. M. Glenn</title>
</svelte:head>

<h1>Patrick Glenn</h1>

<p>
<img src="/faced.jpg" alt="face"/>
I live in <span style="color:green">Green </span><span style="color:gold"> Bay</span>, WI
</p>




