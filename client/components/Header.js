import React, { useContext } from "react";
import {
  Avatar,
  Box,
  Button,
  Flex,
  Heading,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  Spacer,
  Spinner,
  useColorMode,
} from "@chakra-ui/react";
import Link from "next/link";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import AuthContext from "../context/AuthContext";
const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { signOut, isAuthStateReady, user } = useContext(AuthContext);

  return (
    <Flex py="2" align="center">
      <Box>
        <Heading size="sm">
          🔥 <Link href="/">tutran.dev</Link>
        </Heading>
      </Box>
      <Spacer />
      <Box d="flex" alignItems="center">
        <Button onClick={toggleColorMode} mr="2">
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>

        {isAuthStateReady ? (
          <>
            {user ? (
              <Menu closeOnSelect={true}>
                <MenuButton>
                  <Avatar
                    bg={colorMode === "light" ? "teal.400" : "gray.600"}
                    size="sm"
                    colorScheme="orange"
                    name={user.username}
                  />
                </MenuButton>
                <MenuList>
                  <Link href="/my-courses">
                    <a>
                      <MenuItem>My Courses</MenuItem>
                    </a>
                  </Link>
                  <MenuItem onClick={signOut}>Log out</MenuItem>
                </MenuList>
              </Menu>
            ) : (
              <Link href="/auth/login">
                <a>
                  <Button colorScheme="orange">Log in</Button>
                </a>
              </Link>
            )}
          </>
        ) : (
          <Spinner colorScheme="orange" label="loading" />
        )}
      </Box>
    </Flex>
  );
};

export default Header;
