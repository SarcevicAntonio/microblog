export async function load({ locals, params }) {
	const post = await locals.pb.collection('posts').getOne(params.id)
	return {
		post: structuredClone(post),
	}
}
