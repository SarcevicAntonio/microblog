export async function load({ locals, params }) {
	if (!locals.pb.authStore.model) throw error(401, 'login pls')

	try {
		const post = await locals.pb.collection('posts').getOne(params.id)
		return {
			post: structuredClone(post),
		}
	} catch (e) {
		return
	}
}
