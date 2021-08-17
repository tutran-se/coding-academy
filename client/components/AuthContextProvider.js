import React, { useState } from "react";
import { useMutation, useQuery } from "@apollo/client";
import { useToast } from "@chakra-ui/react";
import AuthContext from "../context/AuthContext";
import { useRouter } from "next/router";
import { LOGIN_USER, REGISTER_USER, USER_ME } from "../constants/queryGrapql";

const AuthContextProvider = ({ children }) => {
  const router = useRouter();
  const toast = useToast();
  const [state, setState] = useState({
    user: null,
    isAuthStateReady: false,
  });
  useQuery(USER_ME, {
    onCompleted(data) {
      const { me: user } = data;
      setState((old) => {
        return { ...old, user, isAuthStateReady: true };
      });
    },
    onError(err) {
      setState((old) => {
        return { ...old, user: null, isAuthStateReady: true };
      });
    },
  });

  const [login, { loading: loginLoading }] = useMutation(LOGIN_USER, {
    onCompleted({ login }) {
      if (login) {
        const { jwt, user } = login;
        console.log(login);
        localStorage.setItem("token", jwt);
        console.log(state);
        setState({ ...state, user, isAuthStateReady: true });
        router.push("/");
      }
    },
    onError(error) {
      console.log(error);
      toast({
        position: "top-right",
        title: "Error!",
        description: "Email/Password is not correct",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setState({ ...state, user: null, isAuthStateReady: true });
    },
  });
  const [register, { loading: registerLoading }] = useMutation(REGISTER_USER, {
    onCompleted({ register }) {
      if (register) {
        const { jwt, user } = register;
        console.log(register);
        localStorage.setItem("token", JSON.stringify(jwt));
        setState({ ...state, user, isAuthStateReady: true });
        router.push("/");
      }
    },
    onError(error) {
      console.log(error);
      toast({
        position: "top-right",
        title: "Error!",
        description: "Email already exist",
        status: "error",
        duration: 4000,
        isClosable: true,
      });
      setState({ ...state, user: null, isAuthStateReady: true });
    },
  });

  return (
    <AuthContext.Provider
      value={{ ...state, login, register, loginLoading, registerLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
