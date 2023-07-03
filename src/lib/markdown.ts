import insane from 'insane'
import { marked } from 'marked'

marked.use({
	mangle: false,
	headerIds: false,
})

export function render_markdown(md: string) {
	return insane(marked(md))
}
