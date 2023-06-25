import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData())

		try {
			await locals.pb.collection('users').create(data)
			await locals.pb
				.collection('users')
				.authWithPassword(data.email.toString(), data.password.toString())
		} catch (error) {
			console.log(error)
			throw error
		}

		throw redirect(303, '/')
	},
}
