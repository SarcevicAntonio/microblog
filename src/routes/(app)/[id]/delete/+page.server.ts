import { error, redirect } from '@sveltejs/kit'

export function load({ locals }) {
	if (!locals.pb.authStore.model) throw error(401, 'login pls')
}

export const actions = {
	default: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData())
		await locals.pb.collection('posts').delete(id.toString())
		throw redirect(303, '/')
	},
}
