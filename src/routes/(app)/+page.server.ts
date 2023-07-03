import { error } from '@sveltejs/kit'
import { ClientResponseError } from 'pocketbase'

export async function load({ locals, url }) {
	const page = +(url.searchParams.get('page') || 0)
	if (isNaN(page)) return error(400, 'page is NaN')
	try {
		const post_list = await locals.pb.collection('posts').getList(page, 50, {
			sort: '-created',
		})
		return {
			post_list: structuredClone(post_list),
		}
	} catch (e) {
		if (e instanceof ClientResponseError)
			console.warn('ClientResponseError: is PocketBase running?')
		throw e
	}
}

export const actions = {
	post: async ({ request, locals }) => {
		const { post } = Object.fromEntries(await request.formData())

		try {
			await locals.pb.collection('posts').create({ post, author: locals.pb.authStore.model?.id })
		} catch (error) {
			console.error(error)
			throw error
		}
	},
	delete: async ({ request, locals }) => {
		const { id } = Object.fromEntries(await request.formData())
		await locals.pb.collection('posts').delete(id.toString())
	},
}
