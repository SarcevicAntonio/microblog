import { redirect } from '@sveltejs/kit'

export async function GET({ locals }) {
	locals.pb.authStore.clear()
	throw redirect(303, '/')
}
