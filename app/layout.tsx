import { Inter } from 'next/font/google'
import Footer from '../components/Footer'
import Header from '../components/Header'
import './styles/globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'Locomotive Depot',
	description: 'Lokomotiv Depo rasmiy sayti',
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang='uz'>
			<body className={inter.className}>
				<Header />
				<main className='min-h-screen bg-gray-50'>{children}</main>
				<Footer />
			</body>
		</html>
	)
}
