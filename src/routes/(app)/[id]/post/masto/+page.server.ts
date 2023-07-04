import { Masto } from '$lib/masto.js'

export const actions = {
	default: async ({ params }) => {
		const access_token = await Masto.getAccessToken()
		console.log(access_token)
	},
}
