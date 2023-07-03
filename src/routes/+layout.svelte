<script>
	import '../app.postcss'

	export let data
</script>

<header>
	{#if !data.user}
		<a href="/register">🆕 register</a>
		<a href="/login">🔑 login</a>
	{:else}
		<a href="/logout">🚪 logout</a>
	{/if}
</header>

<slot />

<style>
	header {
		display: flex;
		gap: 1rem;
		justify-content: space-between;
	}
</style>
