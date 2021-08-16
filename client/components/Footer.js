import { Center } from "@chakra-ui/react";
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <Center p="2">
      &copy;2021 -{" "}
      <Link href="/">
        <a style={{ textDecoration: "underline" }}>tutran.dev</a>
      </Link>
    </Center>
  );
};

export default Footer;
