import { ApolloProvider } from "@apollo/client";
import { ChakraProvider } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import AuthContextProvider from "../components/AuthContextProvider";
import Footer from "../components/Footer";
import Header from "../components/Header";
import client from "../libs/apolloClient";
import theme from "../libs/theme";

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <ApolloProvider client={client}>
        <Container maxW="container.md">
          <AuthContextProvider>
            <Header />
            <Component {...pageProps} />
            <Footer />
          </AuthContextProvider>
        </Container>
      </ApolloProvider>
    </ChakraProvider>
  );
}

export default MyApp;
