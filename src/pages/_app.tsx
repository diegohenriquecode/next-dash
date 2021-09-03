import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "../styles/theme";
import { SidebarDrawerProdiver } from "../contexts/SidebarDraweContext";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <SidebarDrawerProdiver>
        <Component {...pageProps} />
      </SidebarDrawerProdiver>
    </ChakraProvider>
  );
}

export default MyApp;
