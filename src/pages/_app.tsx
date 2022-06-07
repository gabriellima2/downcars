import type { AppProps } from "next/app";

import { MobileNavigationContextProvider } from "../contexts/MobileNavigationContext";

import "../styles/globals.css";

function App({ Component, pageProps }: AppProps) {
	return (
		<MobileNavigationContextProvider>
			<Component {...pageProps} />
		</MobileNavigationContextProvider>
	);
}

export default App;
