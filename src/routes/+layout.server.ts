import { POSTER_EMAIL } from '$env/static/private'

export async function load({ locals }) {
	const filter = `email = "${POSTER_EMAIL}"`

	console.log(filter)

	const poster = await locals.pb.collection('users').getFirstListItem(filter)

	console.log(poster)
	return {
		poster: structuredClone(poster),
		user: structuredClone(locals.pb.authStore.model),
	}
}
