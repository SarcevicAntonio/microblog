<script lang="ts">
	export let data
</script>

{#if !data.user}
	<header>
		<a href="/register">register</a>
		<a href="/login">login</a>
	</header>
{:else}
	<header>
		<a href="/logout">logout</a>
	</header>
	<slot />
{/if}
