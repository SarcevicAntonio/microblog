import { POSTER_EMAIL } from '$env/static/private'
import { redirect } from '@sveltejs/kit'

export const load = async ({ locals }) => {
	if (locals.pb.authStore.model) throw redirect(302, '/')
}

export const actions = {
	default: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData())

		try {
			if (data.email !== POSTER_EMAIL) throw new Error(data.email + '!==' + POSTER_EMAIL)
			await locals.pb.collection('users').create({ ...data, emailVisibility: true })
			await locals.pb
				.collection('users')
				.authWithPassword(data.email.toString(), data.password.toString())
		} catch (error) {
			console.error(error)
			throw error
		}

		throw redirect(303, '/')
	},
}
