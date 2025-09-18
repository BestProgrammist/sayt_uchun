'use client'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
const navLinks = [
	{ href: '/', label: 'Bosh sahifa' },
	{ href: '/about', label: 'Biz haqimizda' },
	{ href: '/services', label: 'Xizmatlar' },
	{ href: '/news', label: 'Yangiliklar' },
	{ href: '/leadership', label: 'Rahbariyat' },
	{ href: 'https://e-ticket.railway.uz', label: 'Bilet olish' },
	{ href: '/contact', label: 'Aloqa' },
]

export default function Header() {
	const [open, setOpen] = useState(false)

	return (
		<header className='bg-white shadow-md sticky top-0 z-50'>
			<div className='max-w-7xl mx-auto px-4 flex justify-between items-center h-16'>
				<Link href='/' className='flex items-center space-x-2'>
					<div className='flex justify-center w-10 h-auto'>
						<Image
							src='/logo.png'
							alt='logo'
							width={200}
							height={200}
							// className='rounded-lg shadow'
							className='w-full h-auto rounded-lg  object-cover'
							priority
						/>
					</div>
					<span className='font-bold text-lg'>Lokomotiv Depo</span>
				</Link>

				<nav className='hidden md:flex space-x-6'>
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='hover:text-blue-600 transition'
						>
							{link.label}
						</Link>
					))}
				</nav>

				{/* Mobile menu button */}
				<button className='md:hidden' onClick={() => setOpen(!open)}>
					{open ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
				</button>
			</div>

			{/* Mobile menu */}
			{open && (
				<div className='md:hidden bg-white border-t p-4 space-y-3 absolute top-17 w-full'>
					{navLinks.map(link => (
						<Link
							key={link.href}
							href={link.href}
							className='block hover:bg-slate-500'
							onClick={() => setOpen(false)}
						>
							{link.label}
						</Link>
					))}
				</div>
			)}
		</header>
	)
}
