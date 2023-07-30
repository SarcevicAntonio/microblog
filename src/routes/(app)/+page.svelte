<script>
	import { render_markdown } from '$lib/markdown'
	export let data
</script>

<ul>
	{#each data.post_list.items as { created, body, id }}
		<li class="post-box">
			<article>
				<a href="/{id}">
					<small>{new Date(created).toLocaleString()}</small>
				</a>
				{@html render_markdown(body)}
			</article>
		</li>
	{/each}
</ul>
