// Wraps all the pages in your application
// Keep state when navigating between pages
// Add global styles

import "../styles/globals.scss"
import { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
	return <Component {...pageProps} />;
}
