<script>
	import { PUBLIC_MASTO_ID, PUBLIC_URL } from '$env/static/public'
</script>

<a
	href="https://mastodon.online/oauth/authorize?client_id={PUBLIC_MASTO_ID}&scope=read+write&redirect_uri={PUBLIC_URL}/oauth/authorize&response_type=code"
>
	🐘 auth masto</a
>

<form method="POST"><button>POST NOW</button></form>
