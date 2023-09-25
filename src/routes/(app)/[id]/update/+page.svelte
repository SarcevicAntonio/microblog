<script>
	export let data
</script>

<form method="POST" class="main-form">
	<textarea name="body" value={data.post.body} />
	<button>update</button>
</form>
