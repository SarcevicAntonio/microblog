import { redirect } from '@sveltejs/kit'

export async function load({ locals, params }) {
	const post = await locals.pb.collection('posts').getOne(params.id)
	return {
		...structuredClone(post),
	}
}

export const actions = {
	update: async ({ request, locals }) => {
		const { id, post } = Object.fromEntries(await request.formData())
		console.log(post)
		await locals.pb
			.collection('posts')
			.update(id.toString(), { post, author: locals.pb.authStore.model?.id })
		throw redirect(303, '/')
	},
	delete: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData())
		await locals.pb.collection('posts').delete(id.toString())
		throw redirect(303, '/')
	},
}
