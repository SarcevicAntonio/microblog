import { POSTER_EMAIL } from '$env/static/private'

export async function load({ locals }) {
	let poster
	try {
		poster = await locals.pb.collection('users').getFirstListItem(`email = "${POSTER_EMAIL}"`)
	} catch (e) {}

	return {
		poster: structuredClone(poster),
		user: structuredClone(locals.pb.authStore.model),
	}
}
