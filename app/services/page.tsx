// app/xizmatlar/page.tsx

import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/styles/components/ui/card'
import Image from 'next/image'

const services = [
	{
		title: "Lokomotiv ta'mirlash",
		description:
			"Lokomotivlarni to‘liq texnik ko‘rikdan o‘tkazish va ta'mirlash xizmatlari.",
		image: '/tamir.jpg',
	},
	{
		title: '/texnik.jpg',
		description:
			'Har kuni, haftalik va oylik texnik xizmat ko‘rsatish ishlari.',
		image: '/texnik.jpg',
	},
	{
		title: 'Zaxira qismlar',
		description: 'Asosiy ehtiyot qismlar va materiallarni taqdim qilish.',
		image: '/texnik.jpg',
	},
	{
		title: 'Modernizatsiya',
		description:
			'Lokomotivlarni zamonaviylashtirish va samaradorligini oshirish.',
		image: '/texnik.jpg',
	},
	{
		title: 'Maslahatchilik',
		description:
			'Texnik va ishlab chiqarish bo‘yicha professional maslahatlar.',
		image: '/texnik.jpg',
	},
	{
		title: 'O‘qitish va trening',
		description:
			'Xodimlarni yangi texnologiyalar va uskunalar bilan ishlashga o‘rgatish.',
		image: '/texnik.jpg',
	},
]

export default function XizmatlarPage() {
	return (
		<div className='container mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold text-center mb-10'>
				Bizning xizmatlarimiz
			</h1>

			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{services.map((service, idx) => (
					<Card
						key={idx}
						className='shadow-lg rounded-2xl hover:shadow-xl transition'
					>
						<CardHeader className='p-0'>
							<Image
								src={service.image}
								alt='logo'
								width={1200}
								height={600}
								// className='rounded-lg shadow'
								className='w-full h-auto rounded-xs shadow-lg object-cover'
								priority
							/>
						</CardHeader>
						<CardContent className='p-4'>
							<CardTitle className='text-xl mb-2'>{service.title}</CardTitle>
							<p className='text-gray-600'>{service.description}</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}

// import Container from '../../components/Container'

// export default function ServicesPage() {
// 	return (
// 		<Container>
// 			<h1 className='text-2xl font-bold mb-4'>Xizmatlar</h1>
// 			<ul className='space-y-2 list-disc pl-6 text-gray-700'>
// 				<li>Lokomotivlarni texnik ko‘rikdan o‘tkazish</li>
// 				<li>Ta’mirlash va ehtiyot qismlar bilan ta’minlash</li>
// 				<li>Modernizatsiya va yangilash ishlari</li>
// 			</ul>
// 		</Container>
// 	)
// }
