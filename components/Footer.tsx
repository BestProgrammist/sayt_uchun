import {
	Instagram,
	Mail,
	MapPin,
	Phone,
	Telescope,
	Youtube,
} from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'

export default function Footer() {
	return (
		<footer className='bg-gray-900 text-white pb-6 mt-10'>
			<div className='w-full  bg-green-950'>
				<section className='container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8 text-center'>
					<div className='p-6 rounded-xl shadow hover:shadow-md grid gap-5 '>
						<h3 className='text-xl font-semibold mb-2'>
							<div className='flex justify-center'>
								<Image
									src='/logo.png'
									alt='logo'
									width={500}
									height={500}
									// className='rounded-lg shadow'
									className='w-1/2 h-auto rounded-lg  object-cover'
									priority
								/>
							</div>
						</h3>
						<p>"Qarshi lokomotiv deposi" filiali</p>
						<span className='flex justify-center space-x-3'>
							<Telescope />
							<Youtube />
							<Instagram />
						</span>
					</div>
					<div className='p-6 rounded-xl shadow hover:shadow-md grid gap-5 '>
						<h3 className='text-xl font-semibold mb-1'>Asosiy sahifalar</h3>
						<span className='flex flex-col justify-center space-y-3'>
							<Link href={'/'}>Bosh sahifa</Link>
							<Link href={'/about'}>Biz haqimizda</Link>
							<Link href={'/services'}>Xizmatlar</Link>
							<Link href={'/news'}>Yangiliklar</Link>
							<Link href={'/leadership'}>Rahbariyat</Link>
							<Link href={'/contact'}>Aloqa</Link>
						</span>
					</div>
					<div className='p-6 rounded-xl shadow hover:shadow-md'>
						<h3 className='text-xl font-semibold mb-2'>Aloqa</h3>
						<div className='space-y-6'>
							<div className='flex items-center gap-3'>
								<Phone className='text-blue-600' />
								<span>+998 90 123 45 67</span>
							</div>
							<div className='flex items-center gap-3'>
								<Mail className='text-blue-600' />
								<span>info@depo.uz</span>
							</div>
							<div className='flex items-center gap-3'>
								<MapPin className='text-blue-600' />
								<span>Toshkent sh., Temiryo‘l ko‘chasi, 25</span>
							</div>
						</div>
					</div>
				</section>
			</div>
			<div className='max-w-7xl mx-auto px-4 mt-7 text-center text-sm '>
				<p>
					© {new Date().getFullYear()} Locomotiv Depo. Barcha huquqlar
					himoyalangan.
				</p>
			</div>
		</footer>
	)
}
