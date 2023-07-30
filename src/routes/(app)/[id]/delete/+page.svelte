<script>
	export let data
</script>

Are you sure you want to delete the post?

<form method="POST">
	<input name="id" value={data.post.id} hidden />
	<button>delete</button>
</form>
