<script>
	import { render_markdown } from '$lib/markdown'
	export let data
</script>

<h1>📜 feed</h1>
{#if data?.post_list?.items?.length}
	<ul class="feed">
		{#each data.post_list.items as { created, body, id }}
			<li class="post-box">
				<article>
					<aside>
						<a href="/{id}">
							<time datetime={created}>{new Date(created).toLocaleString()}</time>
						</a>
					</aside>
					{@html render_markdown(body)}
				</article>
			</li>
		{/each}
	</ul>
{:else}
	<p>❌ no posts yet</p>
{/if}