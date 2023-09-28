<script>
	import { render_markdown } from '$lib/markdown'
	import Children from './Children.svelte'

	export let children
</script>

<ul class="feed">
	{#each children as child}
		<li>
			<article class="post-box">
				<aside>
					<a href="/{child.id}">
						<time datetime={child.created}>{new Date(child.created).toLocaleString()}</time>
					</a>
				</aside>
				{@html render_markdown(child.body)}
			</article>
			{#if child.children.length}
				<Children children={child.children} />
			{/if}
		</li>
	{/each}
</ul>

<style>
	.feed {
		gap: 0;
		border-inline-start: 0.25rem solid var(--accent);
	}
</style>
