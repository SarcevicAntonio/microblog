<script>
	import { page } from '$app/stores'
	import '../app.postcss'
	import 'virtual:uno.css'

	export let data
</script>

<header>
	<nav>
		{#if !data.user}
			{#if !data.poster}
				<a href="/register">➕🔐 register</a>
			{:else}
				<a href="/login">🔐 login</a>
			{/if}
		{:else}
			{#if $page.route.id !== '/(app)'}
				<a href="/">📜 feed</a>
			{:else}
				<a href="/logout" data-sveltekit-preload-data="off">🚪 logout</a>
			{/if}
			<a href="/new">✏️ post</a>
		{/if}
	</nav>
</header>

<main>
	<slot />
</main>

<style lang="postcss">
	nav {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
		background: var(--accent);
		& a {
			border: 1px solid var(--back);
		}

		padding: 0.5rem;
	}

	main {
		padding-block-start: 2rem;
		max-width: 50rem;
		margin: auto;
	}
</style>
