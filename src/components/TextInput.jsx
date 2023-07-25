import React, { useState } from "react";
import { Text, Button, useToast, Textarea } from "@chakra-ui/react";

const TextInput = ({ extractkeywords }) => {
  const [text, setText] = useState("");

  const toast = useToast();

  const submitText = () => {
    text === ""
      ? toast({
          title: "Text field is empty",
          description: "Please enter some text to extract keywords",
          status: "error",
          duration: 5000,
          isClosable: false,
          position: "top",
        })
      : extractkeywords(text);
  };
  return (
    <>
      <Textarea
        bg="blue.400"
        color="white"
        padding={4}
        marginTop={6}
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Enter text to extract key words from..."
        _placeholder={{ color: "gray.300" }}
      />

      <Button
        bg="blue.500"
        color="white"
        marginTop={4}
        width="100%"
        _hover={{ bg: "blue.700" }}
        onClick={submitText}
      >
        Extract Keywords
      </Button>
    </>
  );
};

export default TextInput;
