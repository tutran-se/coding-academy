import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import Footer from "../components/Footer";
import Header from "../components/Header";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <Container maxW="container.xl">
        <Header />
        <Component {...pageProps} />
        <Footer />
      </Container>
    </ChakraProvider>
  );
}

export default MyApp;
