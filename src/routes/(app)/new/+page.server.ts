import { authGuard } from '$lib/auth.js'
import { redirect } from '@sveltejs/kit'

export async function load({ locals }) {
	authGuard(locals.pb)
}

export const actions = {
	default: async ({ request, locals }) => {
		const { body } = Object.fromEntries(await request.formData())

		let id
		try {
			const record = await locals.pb
				.collection('posts')
				.create({ body, author: locals.pb.authStore.model?.id })
			id = record.id
		} catch (error) {
			console.error(error)
			throw error
		}
		if (id) {
			throw redirect(302, '/' + id)
		}
	},
}
