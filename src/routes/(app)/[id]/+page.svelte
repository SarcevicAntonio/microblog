<script>
	import { marked } from 'marked'

	export let data
</script>

<small>{new Date(data.post.created).toLocaleString()}</small>

<article>{@html marked(data.post.body)}</article>

<nav>
	<a href="/">👈 back</a>
	<a href="/{data.post.id}/update">🖌️ update</a>
	<a href="/{data.post.id}/delete">🗑️ delete</a>
</nav>

<style>
	nav {
		display: flex;
		gap: 1rem;
		justify-content: space-between;

		border-bottom: 0.1rem solid black;
		padding-bottom: 0.5rem;
		margin-bottom: 0.5rem;
	}
</style>
