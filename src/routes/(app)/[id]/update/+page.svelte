<script>
	export let data
</script>

<form method="POST">
	<input name="id" value={data.post.id} hidden />
	<textarea name="body" value={data.post.body} />
	<button>update</button>
</form>

<style>
	textarea,
	button {
		display: block;
	}
</style>
