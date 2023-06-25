<script>
	export let data
</script>

<form method="POST" action="?/post">
	<textarea name="post" />
	<!-- <input type="file" multiple accept="image/*,video/*" /> -->
	<button>post</button>
</form>

<ul>
	{#each data.post_list.items as item}
		<li>
			<small>{new Date(item.created).toLocaleString()}</small>
			<p>{item.post}</p>
			<form method="POST" action="?/delete">
				<input name="id" value={item.id} hidden />
				<button>delete</button>
			</form>
		</li>
	{/each}
</ul>

<style>
	textarea,
	button {
		display: block;
	}
</style>
