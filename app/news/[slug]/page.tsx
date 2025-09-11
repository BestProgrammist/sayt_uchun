import { notFound } from 'next/navigation'
import { getNewsDetails } from '../../../services/news.service'

export default async function NewsDetail({
	params,
}: {
	params: { slug: string }
}) {
	const { slug } = await params
	const newsDetail = await getNewsDetails(slug)
	console.log(newsDetail)

	if (!newsDetail[0]) {
		return notFound()
	}

	return (
		<div className='container mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold mb-4'>{newsDetail[0].title}</h1>
			<p className='text-gray-500 mb-6'>
				{newsDetail[0].date} • 👁 {newsDetail[0].views}
			</p>

			<div className='grid gap-4 mb-6 grid-cols-4'>
				{newsDetail[0].gallery && newsDetail[0].gallery.length > 0 ? (
					newsDetail[0].gallery.map((img, idx) => (
						// <Image
						// 	src={img.url}
						// 	alt='Biz haqimizda'
						// 	width={1200}
						// 	height={600}
						// 	key={idx}
						// 	// className='rounded-lg shadow'
						// 	className='w-full h-auto rounded-xl shadow-lg object-cover'
						// 	priority
						// />
						<img
							key={idx}
							src={img.url}
							alt={`${newsDetail[0].title} ${idx + 1}`}
							className='rounded-lg shadow'
						/>
					))
				) : (
					<p className='col-span-2 text-gray-400 text-center'>
						📷 Ushbu yangilik uchun galereya yo‘q
					</p>
				)}
			</div>

			<p className='text-lg leading-relaxed'>{newsDetail[0].description}</p>
		</div>
	)
}
