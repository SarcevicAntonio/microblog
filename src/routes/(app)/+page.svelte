<script>
	import { render_markdown } from '$lib/markdown'
	export let data
</script>

<ul>
	{#each data.post_list.items as { created, body, id }}
		<li>
			<a href="/{id}">
				<small>{new Date(created).toLocaleString()}</small>
			</a>
			<article>{@html render_markdown(body)}</article>
		</li>
	{/each}
</ul>

<style>
	textarea,
	button {
		display: block;
	}
</style>
