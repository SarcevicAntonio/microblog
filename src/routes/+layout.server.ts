export function load({ locals }) {
	return {
		user: structuredClone(locals.pb.authStore.model),
	}
}
