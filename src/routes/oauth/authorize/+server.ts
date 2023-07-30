import { redirect } from '@sveltejs/kit'

export function GET({ url, cookies }) {
	cookies.set('code', url.searchParams.get('code') || '', {
		path: '/',
	})
	throw redirect(303, '/')
}
