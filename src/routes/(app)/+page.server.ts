import { authGuard } from '$lib/auth.js'
import { error } from '@sveltejs/kit'
import { ClientResponseError } from 'pocketbase'

export async function load({ locals, url }) {
	authGuard(locals.pb)

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
