import { json } from '@sveltejs/kit'

export async function GET({ url, locals }) {
	const page = +(url.searchParams.get('page') || 0)
	const post_list = await locals.pb.collection('posts').getList(page, 50, {
		sort: '-created',
	})
	return json(structuredClone(post_list))
}
