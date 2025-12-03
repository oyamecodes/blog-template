import slugify from 'slugify'

export const sluglify = (text: string) => {
	return slugify(text, {
		lower: true,
		strict: true,
		remove: /[*+~.()'"!:@]/g,
		replacement: '-'
	})
}

export const unsluglify = (slug: string) => {
	return slug
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ')
}
