import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import theme from "../libs/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Container maxW="container.md">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
