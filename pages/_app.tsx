import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
	return (
		<div>
			<Head>
				<title>Hi, Doh Kim</title>
			</Head>
			<Component {...pageProps} />
			<Footer />
		</div>
	);
}

export default MyApp;
