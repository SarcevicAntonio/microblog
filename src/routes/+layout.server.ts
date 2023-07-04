import { POSTER_EMAIL } from '$env/static/private'

export async function load({ locals }) {
	const poster = await locals.pb.collection('users').getFirstListItem(`email = "${POSTER_EMAIL}"`)
	return {
		poster: structuredClone(poster),
		user: structuredClone(locals.pb.authStore.model),
	}
}
