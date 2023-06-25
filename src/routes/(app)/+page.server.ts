export async function load({ locals, url }) {
	const page = +(url.searchParams.get('page') || 0)
	const post_list = await locals.pb.collection('posts').getList(page, 50, {
		sort: '-created',
	})
	return {
		post_list: structuredClone(post_list),
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
