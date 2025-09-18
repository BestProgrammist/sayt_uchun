import { notFound } from 'next/navigation'
import { getNewsDetails } from '../../../services/news.service'

// params endi Promise tipida
export default async function NewsDetail({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params // ❗ Promise dan yechib olyapmiz
	const newsDetail = await getNewsDetails(slug)

	if (!newsDetail) {
		return notFound()
	}

	return (
		<div className='container mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold mb-4'>{newsDetail.title}</h1>
			<p className='text-gray-500 mb-6'>
				{newsDetail.date} • 👁 {newsDetail.views}
			</p>

			<div className='grid gap-4 mb-6 grid-cols-4'>
				{newsDetail.gallery && newsDetail.gallery.length > 0 ? (
					newsDetail.gallery.map((img, idx) => (
						<img
							key={idx}
							src={img.url}
							alt={`${newsDetail.title} ${idx + 1}`}
							className='rounded-lg shadow'
						/>
					))
				) : (
					<p className='col-span-2 text-gray-400 text-center'>
						📷 Ushbu yangilik uchun galereya yo‘q
					</p>
				)}
			</div>

			<p className='text-lg leading-relaxed'>{newsDetail.description}</p>
		</div>
	)
}

export async function generateMetadata({
	params,
}: {
	params: Promise<{ slug: string }>
}) {
	const { slug } = await params
	const news = await getNewsDetails(slug)
	return {
		title: `Yangilik: ${slug}`,
		description: `${slug} haqida batafsil yangilik.`,
		openGraph: {
			title: news.title,
			description: news.description?.slice(0, 160),
			images: [
				{
					url: news.coverImage?.url || '/default-og.png',
					width: 1200,
					height: 630,
					alt: news.title,
				},
			],
		},
		twitter: {
			card: 'summary_large_image',
			title: news.title,
			description: news.description?.slice(0, 160),
			images: [news.coverImage?.url || '/default-og.png'],
		},
	}
}
