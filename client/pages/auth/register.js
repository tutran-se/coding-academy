import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import RegisterForm from "../../components/RegisterForm";

const RegisterPage = () => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.100" : "gray.700";
  return (
    <Container maxW="container.sm">
      <Flex align="center" justify="center" minH="85vh">
        <Box w="100%" boxShadow="xl" rounded="md" bg={bg} p={20}>
          <Heading size="lg" textAlign="center">
            Register
          </Heading>
          <RegisterForm />
        </Box>
      </Flex>
    </Container>
  );
};

export default RegisterPage;
