import { Mail, MapPin, Phone } from 'lucide-react'

export default function ContactPage() {
	return (
		<div className='container mx-auto px-4 py-16'>
			<h1 className='text-3xl font-bold mb-10 text-center'>Aloqa</h1>

			<div className='grid md:grid-cols-2 gap-10'>
				{/* Contact Info */}
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

					{/* Google Map */}
					<div className='mt-6'>
						<iframe
							src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3429.5581202804174!2d65.78417616633371!3d38.80350896955525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f4ea9fe1628e619%3A0x91d945409aa11aec!2sQarshi%20Lokomotiv%20deposi%20(%D0%A2%D0%A7-8)!5e1!3m2!1sru!2s!4v1757417268058!5m2!1sru!2s'
							width='100%'
							height='250'
							style={{ border: 0 }}
							allowFullScreen={true}
							loading='lazy'
							referrerPolicy='no-referrer-when-downgrade'
							className='rounded-lg shadow'
						></iframe>
					</div>
				</div>

				{/* Contact Form */}
				<form className='space-y-4 bg-gray-100 p-6 rounded-lg shadow'>
					<input
						type='text'
						placeholder='Ismingiz'
						className='w-full p-3 rounded border border-gray-300'
					/>
					<input
						type='email'
						placeholder='Email'
						className='w-full p-3 rounded border border-gray-300'
					/>
					<textarea
						placeholder='Xabaringiz'
						rows={4}
						className='w-full p-3 rounded border border-gray-300'
					/>
					<button
						type='submit'
						className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'
					>
						Yuborish
					</button>
				</form>
			</div>
		</div>
	)
}

// import { Mail, MapPin, Phone } from 'lucide-react'

// export default function ContactPage() {
// 	return (
// 		<div className='container mx-auto px-4 py-16'>
// 			<h1 className='text-3xl font-bold mb-10 text-center'>Aloqa</h1>

// 			<div className='grid md:grid-cols-2 gap-10'>
// 				{/* Contact Info */}
// 				<div className='space-y-6'>
// 					<div className='flex items-center gap-3'>
// 						<Phone className='text-blue-600' />
// 						<span>+998 90 123 45 67</span>
// 					</div>
// 					<div className='flex items-center gap-3'>
// 						<Mail className='text-blue-600' />
// 						<span>info@depo.uz</span>
// 					</div>
// 					<div className='flex items-center gap-3'>
// 						<MapPin className='text-blue-600' />
// 						<span>Toshkent sh., Temiryo‘l ko‘chasi, 25</span>
// 					</div>
// 				</div>

// 				{/* Contact Form */}
// 				<form className='space-y-4 bg-gray-100 p-6 rounded-lg shadow'>
// 					<input
// 						type='text'
// 						placeholder='Ismingiz'
// 						className='w-full p-3 rounded border border-gray-300'
// 					/>
// 					<input
// 						type='email'
// 						placeholder='Email'
// 						className='w-full p-3 rounded border border-gray-300'
// 					/>
// 					<textarea
// 						placeholder='Xabaringiz'
// 						rows={4}
// 						className='w-full p-3 rounded border border-gray-300'
// 					/>
// 					<button
// 						type='submit'
// 						className='bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700'
// 					>
// 						Yuborish
// 					</button>
// 				</form>
// 			</div>
// 		</div>
// 	)
// }
