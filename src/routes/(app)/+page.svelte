<script>
	export let data
</script>

<form method="POST" action="?/post">
	<textarea name="post" />
	<!-- <input type="file" multiple accept="image/*,video/*" /> -->
	<button>post</button>
</form>

<ul>
	{#each data.post_list.items as { created, post, id }}
		<li>
			<small>{new Date(created).toLocaleString()}</small>
			<p>{post}</p>
			<form method="POST" action="?/delete">
				<input name="id" value={id} hidden />
				<button>delete</button>
			</form>
			<a href="/update/{id}">update</a>
		</li>
	{/each}
</ul>

<style>
	textarea,
	button {
		display: block;
	}
</style>
