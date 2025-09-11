import Image from 'next/image'

export default function AboutPage() {
	return (
		<div className='container mx-auto px-4 py-16'>
			<h1 className='text-3xl font-bold mb-6 text-center'>Biz haqimizda</h1>
			<p className='text-lg text-gray-700 mb-8 text-center max-w-3xl mx-auto'>
				Lokomotiv depomiz 19xx-yildan beri faoliyat yuritib kelmoqda. Asosiy
				vazifamiz – lokomotivlarga xizmat ko‘rsatish, ularni ta’mirlash va temir
				yo‘l transporti samaradorligini oshirishdir.
			</p>

			<div className='grid md:grid-cols-2 gap-8 items-center'>
				<Image
					src='/aboutUs.jpg'
					alt='Biz haqimizda'
					width={1200}
					height={600}
					// className='rounded-lg shadow'
					className='w-full h-auto rounded-xl shadow-lg object-cover'
					priority
				/>
				<div className='space-y-4'>
					<h2 className='text-2xl font-semibold'>Bizning maqsadimiz</h2>
					<p className='text-gray-600'>
						Har bir yo‘lovchi va yuk tashish xizmatida xavfsizlik, sifat va
						ishonchlilikni ta’minlash.
					</p>
					<h2 className='text-2xl font-semibold'>Bizning jamoamiz</h2>
					<p className='text-gray-600'>
						O‘z ishiga mehr qo‘ygan yuzlab mutaxassislar — muhandislar, texnik
						xodimlar va rahbariyat.
					</p>
				</div>
			</div>
		</div>
	)
}
