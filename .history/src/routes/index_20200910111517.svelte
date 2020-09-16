<style>
	h1, figure, p {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.9em;
		font-weight: 700;
		padding-bottom: 0.8em;
	}

	figure {
		margin: -10% 0 1em 0;
		filter: drop-shadow(0 0 1em #1c1c2c);
		clip-path: circle(20% at 56% 36%);


		shape-outside: circle(20% at 56% 36%);
		overflow: hidden;
	}

	img {
		margin: 0;
		width: min(45%, 200px);
		border-radius: 100%;
		float: left;
		clip-path: circle(50%);
		shape-outside: padding-box;
    padding: 0 10px;
    min-width: 120px;
	}


	img:hover {
		transform: rotateZ(.02turn) scale(1.03);

		filter: drop-shadow(0 0 1em #1f1f2c)

	}

	p {
		margin: auto;
    display: flex;
    place-items: center;
    text-align: left;
    justify-content: space-evenly;
	}

  #statement {
    width: 47%;
    margin-left: 3em;
  }

  #links {
    margin-top: 1em;
  }

	@media (min-width: 480px) {
		h1 {
			font-size: 4em;
		}
    #statement {
      margin: 0 3em 0 0;
    }
	}
</style>

<svelte:head>
	<title>Patrick W. M. Glenn</title>
</svelte:head>

<h1>Patrick Glenn</h1>

<p>
<img src="/faced.jpg" alt="face"/>
<span id='statement'> <b>I am</b> a web developer from <span style="color:green">Green </span><span style="color:gold"> Bay</span>, WI.
  <br/> <b>I love</b> cooking, playing music, and spending time with my loved ones.
  <br /><b>I work</b>  with Javascript, Typescript, React, and Svelte</span>
	<span style='color:#29a2ff'>


</p>
<div id='links'>
		Twitter
	</span>

	<span style='color: #9dff00'>
		Email
	</span>

	<span style='color:#ff7420'>
		Github
	</span>
</div>



