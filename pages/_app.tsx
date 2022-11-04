import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Hi, Doh Kim</title>
				<meta property="og:type" content="website" />
				<meta property="og:title" content="Doh Kim" />
				<meta property="og:description" content="portfolio & resume" />
			</Head>
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
