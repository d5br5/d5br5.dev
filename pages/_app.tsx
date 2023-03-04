import "../styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "../components/Footer";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <title>Doh Kim</title>
        <meta
          name="description"
          content="Doh Kim's portfolio website. Web front-end developer at adena software. Graduated at Seoul Nat'l University. "
        />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Doh Kim" />
        <meta
          property="og:description"
          content="front-end portfolio & resume"
        />
      </Head>
      <Component {...pageProps} />
      <Footer />
    </div>
  );
}

export default MyApp;
