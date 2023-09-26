export const load = async ({ locals, params }) => {
	const children = await locals.pb.collection('posts').getFullList({
		filter: `parent = "${params.id}"`,
	})
	return {
		children: structuredClone(children),
	}
}
