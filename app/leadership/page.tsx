// app/rahbariyat/page.tsx
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
} from '@/styles/components/ui/card'
import Image from 'next/image'

const leaders = [
	{
		fullname: 'Abdullaev Azizbek',
		position: 'Bosh direktor',
		reception: 'Dushanba, Payshanba 10:00 - 12:00',
		contact: '+998 90 123 45 67',
		image: '/xodim.jpg',
	},
	{
		fullname: 'Xoliqova Dilnoza',
		position: 'Bosh hisobchi',
		reception: 'Seshanba 14:00 - 16:00',
		contact: '+998 91 765 43 21',
		image: '/xodim.jpg',
	},
	{
		fullname: 'Rasulov Sherzod',
		position: 'Texnik direktor',
		reception: 'Chorshanba 09:00 - 11:00',
		contact: '+998 93 555 11 22',
		image: '/xodim.jpg',
	},
]

export default function RahbariyatPage() {
	return (
		<div className='container mx-auto px-4 py-10'>
			<h1 className='text-3xl font-bold text-center mb-10'>Rahbariyat</h1>

			<div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3'>
				{leaders.map((leader, idx) => (
					<Card
						key={idx}
						className='shadow-lg rounded-2xl hover:shadow-xl transition'
					>
						<CardHeader className='flex flex-col items-center p-4'>
							<Image
								src={leader.image}
								alt={leader.fullname}
								width={1200}
								height={2400}
								// className='rounded-lg shadow'
								className='w-full h-auto rounded-xl shadow-lg object-cover'
								priority
							/>
							<CardTitle className='text-xl mt-4'>{leader.fullname}</CardTitle>
							<p className='text-gray-500'>{leader.position}</p>
						</CardHeader>
						<CardContent className='text-center space-y-2'>
							<p>
								<span className='font-semibold'>Qabul kunlari:</span>{' '}
								{leader.reception}
							</p>
							<p>
								<span className='font-semibold'>Aloqa:</span> {leader.contact}
							</p>
						</CardContent>
					</Card>
				))}
			</div>
		</div>
	)
}
