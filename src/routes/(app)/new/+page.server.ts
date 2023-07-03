import { error, redirect } from '@sveltejs/kit'

export async function load({ parent }) {
	const data = await parent()
	if (!data.user) throw error(401, 'login pls')
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
