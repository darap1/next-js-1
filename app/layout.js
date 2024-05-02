import { Inter } from 'next/font/google';
import './assets/styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
	title: 'Testing my',
	description: 'Generated by create next app',
	keywords: 'lizing',
};

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}

