// 1. Import `NextUIProvider` component
import { NextUIProvider } from "@nextui-org/react";
import CometProvider from "@comet-labs/react";
// import custom themes from stitches.js
import { darkTheme, lightTheme } from "../styles/stitches";

const cometProviderConfig = {
	publishableKey: "0M2aXASFSFm8yKtXd4pjYBVeuY8gIOgu",
};

function MyApp({ Component, pageProps }) {
	return (
		// 2. Use at the root of your app
		<NextUIProvider theme={darkTheme}>
			{/* <CometProvider config={cometProviderConfig}> */}
			<Component {...pageProps} />
			{/* </CometProvider> */}
		</NextUIProvider>
	);
}

export default MyApp;
