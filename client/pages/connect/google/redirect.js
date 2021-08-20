import React, { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import AuthContext from "../../../context/AuthContext";

const redirect = () => {
  let router = useRouter();
  const { setState, state } = useContext(AuthContext);
  console.log(router.query.access_token);
  useEffect(() => {
    if (router && router.query && router.query.access_token) {
      const fetUserProfile = async () => {
        try {
          const res = await fetch(
            `http://localhost:1337/auth/google/callback?access_token=${router.query.access_token}`
          );
          const data = await res.json();
          const { jwt, user } = data;
          localStorage.setItem("token", jwt);
          setState({ ...state, isAuthStateReady: true, user });
          router.push("/");
        } catch (error) {
          console.log(error);
        }
      };
      return fetUserProfile();
    }
  }, [router]);

  return <div></div>;
};

export default redirect;
