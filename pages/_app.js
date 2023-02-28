import { NextUIProvider } from "@nextui-org/react";
import { darkTheme, lightTheme } from "../styles/stitches";
import { Analytics } from "@vercel/analytics/react";

function MyApp({ Component, pageProps }) {
	return (
		<>
			<NextUIProvider theme={darkTheme}>
				<Component {...pageProps} />
				<Analytics />
			</NextUIProvider>
		</>
	);
}

export default MyApp;
