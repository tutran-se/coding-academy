import React from "react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Spacer,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  return (
    <Flex py="2" align="center">
      <Box>
        <Heading size="sm">
          🔥 <Link href="/">tutran.dev</Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
        <Button onClick={toggleColorMode} mr="2">
          {colorMode === "light" ? <SunIcon /> : <MoonIcon />}
        </Button>
        <Link href="/auth/login">
          <a>
            <Button colorScheme="orange">Log in</Button>
          </a>
        </Link>
      </Box>
    </Flex>
  );
};

export default Header;
