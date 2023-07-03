import { redirect } from '@sveltejs/kit'

export function load({ locals }) {
	if (!locals.pb.authStore.model) throw error(401, 'login pls')
}

export const actions = {
	default: async ({ request, locals }) => {
		const { id, body } = Object.fromEntries(await request.formData())
		await locals.pb
			.collection('posts')
			.update(id.toString(), { body, author: locals.pb.authStore.model?.id })
		throw redirect(303, '/')
	},
}
