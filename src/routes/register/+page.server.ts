import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ request, locals }) => {
		const data = Object.fromEntries(await request.formData())

		try {
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
