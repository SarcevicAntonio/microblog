import { MASTO_ID, MASTO_SECRET } from '$env/static/private'
import { error } from '@sveltejs/kit'

let token: string

async function getAccessToken() {
	if (token) return token
	const body = new FormData()
	body.append('client_id', MASTO_ID)
	body.append('client_secret', MASTO_SECRET)
	body.append('redirect_uri', 'urn:ietf:wg:oauth:2.0:oob')
	body.append('grant_type', 'client_credentials')

	const res = await fetch('https://mastodon.online/oauth/token', {
		method: 'POST',
		body,
	})

	if (res.status !== 200) throw error(500, (await res.json()) || 'MASTO ERROR')

	const json = await res.json()

	token = json.access_token

	return token
}

export const Masto = {
	getAccessToken,
}
