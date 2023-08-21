import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Header from '@/components/Header';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: 'Uol',
	description: 'Teste técnico uol',
};

export default function RootLayout({
	children,
}: {
  children: React.ReactNode
}) {
	return (
		<html lang="pt-br">
			<head>
				<link rel="icon" type="image/x-icon" href="/images/favicon.ico" />
			</head>
			<body className={inter.className}>
				<Header />
				{children}
			</body>
		</html>
	);
}
