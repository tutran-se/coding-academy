import { useColorMode } from "@chakra-ui/color-mode";
import { Box, Flex, Text } from "@chakra-ui/layout";
import React from "react";

const Loader = () => {
  const { colorMode } = useColorMode();
  const bg = colorMode === "light" ? "gray.100" : "gray.700";

  return (
    <Flex
      width="992"
      height={["220", "300", "558", "558"]}
      alignItems="center"
      justify="center"
      bg={bg}
    >
      <Box>
        <Text mb={2} fontSize={["sm", "lg", "lg", "lg"]} textAlign="center">
          Loading...
        </Text>
      </Box>
    </Flex>
  );
};

export default Loader;
