interface SiteConfig {
	site: string
	author: string
	title: string
	description: string
	lang: string
	ogLocale: string
	shareMessage: string
	paginationSize: number
}

export const siteConfig: SiteConfig = {
	site: 'https://blog-template-gray.vercel.app/', // Write here your website url
	author: 'Oyame Mazaleni', // Site author
	title: 'DevJourney by Oyame', // Site title.
	description:
		'Exploring the intersection of code, creativity, and continuous learning. Join me as I share insights, tutorials, and experiences from my software development journey.', // Description to display in the meta tags
	lang: 'en-ZA',
	ogLocale: 'en-ZA',
	shareMessage: 'Share this post', // Message to share a post on social media
	paginationSize: 6 // Number of posts per page
}
