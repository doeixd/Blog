<style>
	h1 {
		text-align: center;
		margin: 0 auto;
	}

	h1 {
		font-size: 2.9rem;
		font-weight: 700;
		padding-bottom: 1rem;
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

	#left {
		margin: auto;
    display: flex;
    place-items: center;
    text-align: left;
    justify-content: space-evenly;
		font-size: 1.2rem
	}

  #statement {
    width: 54%;
    margin-left: 3rem;
  }

  #links {
    margin-top: 1rem;
		display: flex;
		flex-direction: column;
		width: 8ch;
  }
	

	#links > a {
		padding-bottom: .5ch
	}

	@media (min-width: 480px) {
		h1 {
			font-size: 4rem;
		}

		#links {
			flex-direction: row;
		}
		#links > a {
			padding-right: 2ch;
		}


	}
</style>

<svelte:head>
	<title>Patrick W. M. Glenn</title>
</svelte:head>

<h1>Patrick Glenn</h1>

<div id='left'>
<img src="/faced-min.jpg" alt="My Beautiful Face"/>
<span id='statement'> <b>I am</b> a web developer from <span style="color:green">Green </span><span style="color:gold"> Bay</span>, WI.
  <br/> <b>I love</b> cooking, playing music, and spending time with my loved ones.
  <br /><b>I work</b>  with Javascript, Typescript, React, and Svelte

	<div id='links'>
		<a href='http://twitter.com/RelevantElement' style='color:#29a2ff'>
			Twitter
		</a>

		<a href='mailto:ithepatrickglenni@gmail.com' style='color: #9dff00'>
			Email
		</a>

		<a href='github.com/doeixd' style='color:#ff7420'>
			Github
		</a>
	</div>
</span>
</div>
