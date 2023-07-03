import { error } from '@sveltejs/kit'

export function load({ locals }) {
	if (!locals.pb.authStore.model) throw error(401, 'login pls')
}
