import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ request, locals }) => {
		const { id, body } = Object.fromEntries(await request.formData())
		await locals.pb
			.collection('posts')
			.update(id.toString(), { body, author: locals.pb.authStore.model?.id })
		throw redirect(303, '/')
	},
}
