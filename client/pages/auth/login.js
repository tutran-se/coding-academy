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
    <Container maxW="container.sm">
      <Flex align="center" justify="center" minH="85vh">
        <Box w="100%" boxShadow="xl" rounded="md" bg={bg} p={20}>
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
