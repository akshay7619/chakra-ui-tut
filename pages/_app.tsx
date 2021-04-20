import { ChakraProvider } from "@chakra-ui/react";

export default function App(
	{ Component }: { Component: any },
	{ pageProps }: { pageProps: any }
) {
	return (
		<ChakraProvider>
			<Component {...pageProps} />
		</ChakraProvider>
	);
}
