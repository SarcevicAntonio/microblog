import { redirect } from '@sveltejs/kit'

export const actions = {
	default: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData())
		await locals.pb.collection('posts').delete(id.toString())
		throw redirect(303, '/')
	},
}
