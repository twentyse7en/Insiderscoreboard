import Head from 'next/head';

import Header from './Header';
import Footer from './Footer';


export default function Layout({ children }) {
	return (
		<div className="flex flex-col min-h-screen app-layout">
			<Head>
				<title>InsiderScoreboard</title>
				{/* Add more tags */}
				<meta name="keywords" content=""/>
			</Head>

			{/*<Header />*/}
			<main className="flex-1 lg:container px-4 py-6 mx-auto md:px-6 md:py-12">
				{children}
			</main>
			<Footer />
		</div>
	);
}
