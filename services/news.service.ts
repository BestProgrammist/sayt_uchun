import request, { gql } from 'graphql-request'
import { INews } from '../types'

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHCMS_ENDPOINT!

export const getNews = async () => {
	const query = gql`
		query MyQuery {
			news {
				date
				slug
				title
				views
				description
				coverImage {
					url
				}
				gallery {
					url
				}
			}
		}
	`
	const result = await request<{ news: INews[] }>(graphqlAPI, query)
	return result
}
export const getNewsDetails = async (slug: string) => {
	const query = gql`
		query MyQuery($slug: String!) {
			news(where: { slug: $slug }) {
				content {
					html
				}
				gallery {
					url
				}
				title
				description
				date
				views
			}
		}
	`
	const { news } = await request<{ news: INews[] }>(graphqlAPI, query, {
		slug,
	})

	return news
}
