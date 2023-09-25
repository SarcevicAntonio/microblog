import { error, redirect } from '@sveltejs/kit'

export function load({ locals }) {
	if (!locals.pb.authStore.model) throw error(401, 'login pls')
}

export const actions = {
	default: async ({ request, locals, params }) => {
		const form = await request.formData()
		const body = form.get('body')

		await locals.pb
			.collection('posts')
			.update(params.id, { body, author: locals.pb.authStore.model?.id })

		throw redirect(303, '/' + params.id)
	},
}
