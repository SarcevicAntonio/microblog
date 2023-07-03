<script>
	import { marked } from 'marked'
	export let data
</script>


<ul>
	{#each data.post_list.items as { created, body, id }}
		<li>
			<a href="/{id}">
				<small>{new Date(created).toLocaleString()}</small>
			</a>
			<!-- TODO: sanitize @html -->
			<article>{@html marked(body)}</article>
		</li>
	{/each}
</ul>

<style>
	textarea,
	button {
		display: block;
	}
</style>
