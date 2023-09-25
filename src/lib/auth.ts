import { error } from '@sveltejs/kit'
import type PocketBase from 'pocketbase'

export function authGuard(pb: PocketBase) {
	if (!pb.authStore.model) throw error(401, 'login pls')
}
