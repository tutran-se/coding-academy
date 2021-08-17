import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { validateEmail, validatePassword } from "../helpers/formValidation";

const LoginForm = () => {
  const [userInput, setUserInput] = useState({ email: "", password: "" });
  const isValid =
    userInput.email.trim() &&
    userInput.password.trim() &&
    validateEmail(userInput.email.trim()) &&
    validatePassword(userInput.password.trim());

  const formSubmit = (e) => {
    e.preventDefault();
    console.log(userInput);
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
          <FormHelperText mb="2">
            Password should be at least 8 characters long (contain at least 1
            number, 1 lower case, 1 upper case)
          </FormHelperText>
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
          colorScheme="teal"
          // isLoading={props.isSubmitting}
          type="submit"
          size="lg"
          isDisabled={!isValid}
        >
          Login
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
