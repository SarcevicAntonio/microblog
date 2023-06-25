<script>
	export let data
</script>

<a href="/">back</a>
<form method="POST" action="?/update">
	<input name="id" value={data.id} hidden />
	<textarea name="post" value={data.post} />
	<button>update</button>
</form>
<form method="POST" action="?/delete">
	<input name="id" value={data.id} hidden />
	<button>delete</button>
</form>

<style>
	textarea,
	button {
		display: block;
	}
</style>
