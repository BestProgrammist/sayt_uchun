'use client'

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/styles/components/ui/card'
import { Eye } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import { getNews } from '../../services/news.service'
import { INews } from '../../types'

export default function NewsPage() {
	const [newsList = [], setNewsList] = useState<INews[]>([])
	const router = useRouter()
	useEffect(() => {
		const fetchData = async () => {
			const result = await getNews()

			setNewsList(result.news)
		}
		fetchData()
	}, [])

	return (
		<div className='container mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold text-center mb-10'>Yangiliklar</h1>

			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{newsList.map(news => (
					<Card
						key={news.slug}
						className='shadow-lg rounded-2xl hover:shadow-xl transition'
					>
						<img
							src={news.coverImage.url}
							alt={news.title}
							className='w-full h-48 object-cover rounded-t-2xl'
						/>
						<CardHeader>
							<CardTitle className='text-lg'>{news.title}</CardTitle>
							<p className='text-sm text-gray-500'>{news.date}</p>
						</CardHeader>
						<CardContent className='space-y-2'>
							<p className='text-gray-600 line-clamp-2'>{news.description}</p>
							<div className='flex items-center justify-between text-sm text-gray-500'>
								<div className='flex items-center gap-1'>
									<Eye className='w-4 h-4' /> {news.views}
								</div>
								<span
									className='text-blue-600 cursor-pointer'
									onClick={() => router.push(`/news/${news.slug}`)}
								>
									...batafsil
								</span>
							</div>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
