import type PocketBase from 'pocketbase'

export const load = async ({ locals, params }) => {
	const children = await get_all_children(locals.pb, params.id)
	return {
		children: structuredClone(children),
	}
}

async function get_all_children(pb: PocketBase, post_id: string) {
	const children = await pb.collection('posts').getFullList({
		filter: `parent = "${post_id}"`,
	})
	if (children.length === 0) {
		return []
	}
	for (const child of children) {
		child.children = await get_all_children(pb, child.id)
	}
	return children
}
