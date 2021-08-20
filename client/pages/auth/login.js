import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import LoginForm from "../../components/LoginForm";

const LoginPage = () => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.100" : "gray.700";
  return (
    <Container>
      <Flex align="center" justify="center" minH="82vh">
        <Box
          w="100%"
          boxShadow="xl"
          rounded="md"
          bg={bg}
          py={[20, 10, 10, 20]}
          px={[5, 10, 10, 10]}
        >
          <Heading size="lg" textAlign="center">
            Login
          </Heading>
          <LoginForm />
        </Box>
      </Flex>
    </Container>
  );
};

export default LoginPage;
