<script>
	import { page } from '$app/stores'
	import { render_markdown } from '$lib/markdown'

	export let data

	$: pathname = $page.url.pathname
</script>

{#if !data.post}
	<p>❌ no post found</p>
{:else}
	<div class="post-box">
		<article>
			<aside>
				<a href="/{data.post.id}">
					<time datetime={data.post.created}>{new Date(data.post.created).toLocaleString()}</time>
				</a>
			</aside>
			{@html render_markdown(data.post.body)}
		</article>
	</div>

	<nav>
		<a href="/{data.post.id}/reply" class:active={pathname.endsWith('/reply')}>🧵 reply</a>
		<!-- <a href="/{data.post.id}/post/masto" class:active={pathname.endsWith('post/masto')}>
			🐘 post to masto
		</a> -->
		<a href="/{data.post.id}/update" class:active={pathname.endsWith('/update')}>🖌️ update</a>
		<a href="/{data.post.id}/delete" class:active={pathname.endsWith('/delete')}>🗑️ delete</a>
	</nav>

	<slot />
{/if}

<style>
	nav {
		margin: 1rem;
		display: flex;
		gap: 1rem;
		justify-content: space-around;
	}

	.active {
		background: var(--back);
		color: var(--text);
		border: 1px solid var(--accent);
	}
</style>
