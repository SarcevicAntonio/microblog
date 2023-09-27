<script>
	import Children from './Children.svelte'
	import { render_markdown } from '$lib/markdown'

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
		margin-inline-start: 1rem;
		gap: 0;
	}
</style>
