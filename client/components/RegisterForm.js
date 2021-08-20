import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Button,
  Text,
  Stack,
} from "@chakra-ui/react";
import Link from "next/link";
import { validateEmail, validatePassword } from "../helpers/formValidation";
import AuthContext from "../context/AuthContext";

const RegisterForm = () => {
  const { register, registerLoading } = useContext(AuthContext);
  const [userInput, setUserInput] = useState({
    email: "",
    password: "",
  });
  const isValid =
    userInput.email.trim() &&
    userInput.password.trim() &&
    validateEmail(userInput.email.trim()) &&
    validatePassword(userInput.password.trim());

  const formSubmit = (e) => {
    e.preventDefault();
    const { email, password } = userInput;
    const username = email.split("@")[0];
    register({ variables: { username, email, password } });
    console.log("hello");
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
            Password must be at least 8 characters long (contain at least 1
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
          colorScheme="orange"
          isLoading={registerLoading}
          type="submit"
          size="lg"
          isDisabled={!isValid}
        >
          Register
        </Button>
        <Text>
          Already have account.{" "}
          <Link href="/auth/login">
            <a style={{ fontWeight: "bold", textDecoration: "underline" }}>
              Login
            </a>
          </Link>
        </Text>
      </Stack>
    </form>
  );
};

export default RegisterForm;
