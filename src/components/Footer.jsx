import React from "react";
import { Box, Image, Text, Flex } from "@chakra-ui/react";
import logo from "../assets/openai.jpg";

const Footer = () => {
  return (
    <Box marginTop={50}>
      <Flex justifyContent="center" alignItems="center">
        <Image src={logo} height={10} width={10} marginRight={1} />
        <Text>Powered by Open AI</Text>
      </Flex>
    </Box>
  );
};

export default Footer;
