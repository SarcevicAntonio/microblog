<script>
	import '../app.postcss'

	export let data
</script>

<header>
	<nav>
		{#if !data.user}
			{#if !data.poster}
				<a href="/register">➕ register</a>
			{/if}
			<a href="/login">🔑 login</a>
		{:else}
			<a href="/logout" data-sveltekit-preload-data="off">🚪 logout</a>
			<a href="/new">🆕 new</a>
		{/if}
	</nav>
</header>

<slot />

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
