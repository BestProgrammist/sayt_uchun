'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { getNews } from '../services/news.service'

export default function HomePage() {
	useEffect(() => {
		const news = getNews().then(data => console.log(data))
		console.log(news)
	}, [])

	return (
		<div className='w-full'>
			{/* Hero Section */}
			<section className='relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20 text-center'>
				<div className='container mx-auto px-4'>
					<h1 className='text-4xl md:text-5xl font-bold mb-6'>
						Lokomotiv Depo Rasmiy Sayti
					</h1>
					<p className='text-lg md:text-xl mb-8'>
						Sifatli xizmat, zamonaviy texnologiyalar va ishonchli hamkorlik
					</p>
					<Link
						href='/services'
						className='bg-white text-blue-700 px-6 py-3 rounded-lg font-medium shadow hover:bg-gray-100'
					>
						Xizmatlarimizni ko‘rish
					</Link>
				</div>
			</section>

			{/* Short Info */}
			<section className='container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8 text-center'>
				<div className='p-6 bg-gray-100 rounded-xl shadow hover:shadow-md'>
					<h3 className='text-xl font-semibold mb-2'>50+ yil tajriba</h3>
					<p className='text-gray-600'>
						Lokomotivlarni ta’mirlash va boshqarishda boy tajriba.
					</p>
				</div>
				<div className='p-6 bg-gray-100 rounded-xl shadow hover:shadow-md'>
					<h3 className='text-xl font-semibold mb-2'>Yuqori sifat</h3>
					<p className='text-gray-600'>
						Xizmatlarimiz ISO standartlariga mos va zamonaviy.
					</p>
				</div>
				<div className='p-6 bg-gray-100 rounded-xl shadow hover:shadow-md'>
					<h3 className='text-xl font-semibold mb-2'>Ishonchli hamkor</h3>
					<p className='text-gray-600'>Yuzlab tashkilotlar bizni tanlagan.</p>
				</div>
			</section>
		</div>
	)
}
