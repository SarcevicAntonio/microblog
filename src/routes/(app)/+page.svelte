<script>
	import { json } from '@sveltejs/kit'

	export let data
</script>

<form method="POST">
	<textarea name="post" />
	<!-- <input type="file" multiple accept="image/*,video/*" /> -->
	<button>post</button>
</form>

<ul>
	{#each data.post_list.items as item}
		<li>
			<small>{new Date(item.created).toLocaleString()}</small>
			<p>{item.post}</p>
		</li>
	{/each}
</ul>

<style>
	textarea,
	button {
		display: block;
	}
</style>
