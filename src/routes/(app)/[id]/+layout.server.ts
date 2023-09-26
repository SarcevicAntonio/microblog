export async function load({ locals, params }) {
	if (!locals.pb.authStore.model) throw error(401, 'login pls')

	try {
		const post = await locals.pb.collection('posts').getOne(params.id)
		let parent
		if (post.parent) {
			parent = await locals.pb.collection('posts').getOne(post.parent)
		}
		return {
			post: structuredClone(post),
			parent: structuredClone(parent),
		}
	} catch (e) {
		return
	}
}
