import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { validateEmail } from "../helpers/formValidation";
import AuthContext from "../context/AuthContext";
import { FaGoogle } from "react-icons/fa";
import { useRouter } from "next/router";

const LoginForm = () => {
  let router = useRouter();
  const { login, loginLoading } = useContext(AuthContext);
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const isValid =
    userInput.email.trim() &&
    userInput.password.trim() &&
    validateEmail(userInput.email.trim());

  const formSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    login({ variables: { email, password } });
  };
  return (
    <form onSubmit={formSubmit}>
      <Stack>
        <FormControl id="email" isRequired>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            onChange={(e) =>
              setUserInput({ ...userInput, email: e.target.value })
            }
          />
        </FormControl>
        <FormControl id="password" isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            onChange={(e) =>
              setUserInput({ ...userInput, password: e.target.value })
            }
          />
        </FormControl>
        <br />
        <Button
          mt={4}
          type="submit"
          size="lg"
          isDisabled={!isValid}
          isLoading={loginLoading}
          colorScheme="orange"
        >
          Login
        </Button>
        <Button
          mt={4}
          colorScheme="teal"
          size="lg"
          onClick={() => router.push("http://localhost:1337/connect/google")}
        >
          <FaGoogle />
          &ensp;Login with Google
        </Button>
        <Text>
          Don't have account.{" "}
          <Link href="/auth/register">
            <a style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Register
            </a>
          </Link>
        </Text>
      </Stack>
    </form>
  );
};

export default LoginForm;
