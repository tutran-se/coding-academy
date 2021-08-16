import React from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
import Link from "next/link";

const Header = () => {
  return (
    <Flex py="2" align="center">
      <Box>
        <Heading size="md">
          🔥 <Link href="/">tutran.dev</Link>
        </Heading>
      </Box>
      <Spacer />
      <Box>
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
