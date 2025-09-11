export interface INews {
	title: string
	slug: string
	description: string
	coverImage: imageURL
	gallery: imageURL[]
	views: number
	date: string
}

interface imageURL {
	url: string
}
