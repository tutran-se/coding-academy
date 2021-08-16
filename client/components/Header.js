import React from "react";
import { Box, Button, Flex, Heading, Spacer } from "@chakra-ui/react";
const Header = () => {
  return (
    <Flex py="2" align="center">
      <Box>
        <Heading size="md">🔥tutran.dev</Heading>
      </Box>
      <Spacer />
      <Box>
        <Button colorScheme="orange">Log in</Button>
      </Box>
    </Flex>
  );
};

export default Header;
