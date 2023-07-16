import React, { useCallback, useEffect, useState } from "react";

// For Drawer
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
  Stack,
  Box,
  FormLabel,
  Input,
  InputLeftAddon,
  InputGroup,
  useBreakpointValue,
} from "@chakra-ui/react";

import { useToast } from "@chakra-ui/react";

// For Modal
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import { LinkIcon } from "@chakra-ui/icons";

import { AddIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Section2 = () => {
  const [url, setUrl] = useState("");
  const [isSubmit, setIsSubmit] = useState(false);
  const [showToast, setShowToast] = useState(false);
  const [isInputValid, setInputValid] = useState(false);

  // API URL Variable to store user link
  const [apiUrl, setApiUrl] = useState("");

  // Form Auth0 getting email
  const { user } = useAuth0();
  const email = user.email;

  // For Drawer and Modal
  const { isOpen, onOpen, onClose } = useDisclosure();

  // For Drawer
  const firstField = React.useRef();

  // For Modal
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  // For Switiching between Mobile Drawer and Desktop Modal
  const isMobile = useBreakpointValue({ base: true, lg: false });

  // URL from user Handler
  const inputUrlHandler = (event) => {
    const inputCheck = event.target.value.length > 0;
    if (inputCheck) {
      setInputValid(true);
    } else {
      setInputValid(false);
    }
    setUrl(event.target.value);
  };

  // Function to close modal/drawer, and show toast and set isSubmit to False
  const closeAndShowToast = useCallback(() => {
    onClose();
    setShowToast(true);
    setIsSubmit(false);
    setUrl("");
  }, [onClose]);

  // UseEffect hook for API Call to convert links
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        // console.log(json);
        if (json.shortenedLink) {
          closeAndShowToast();
        }
      } catch (error) {
        console.log(error);
      }
    };

    if (isSubmit) {
      fetchData();
    } else {
      return;
    }
  }, [apiUrl, isSubmit, closeAndShowToast]);

  // URL Submission Handler
  const submitHandler = (event) => {
    event.preventDefault();
    let modifiedUrl = url;

    if (!url.startsWith("https://")) {
      modifiedUrl = `https://${url}`;
    }

    const urlRegex = /^(http|https):\/\/[^ "]+\.[^ "]+$/;
    const isValid = urlRegex.test(modifiedUrl);
    console.log(isValid);

    setApiUrl(
      `https://oia.vercel.app/generate?link=${modifiedUrl}&email=${email}`
    );
    setIsSubmit(true);
    setInputValid(false);
    if (isValid) {
      setApiUrl(
        `https://oia.vercel.app/generate?link=${modifiedUrl}&email=${email}`
      );
      setIsSubmit(true);
      setInputValid(false);
    } else {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL.",
        status: "error",
        duration: 3000,
        isClosable: true,
        position: "top",
        size: "xl",
      });
      setIsSubmit(false);
      setInputValid(false);
    }
  };

  // Display a success toast when showToast is true
  const toast = useToast();
  useEffect(() => {
    if (showToast) {
      toast({
        title: "Link converted successfully.",
        status: "success",
        position: "top",
        duration: 3000,
        isClosable: true,
        size: "xl",
      });
      setShowToast(false);
    }
  }, [showToast, toast]);

  return (
    <>
      <Button leftIcon={<AddIcon />} colorScheme="teal" onClick={onOpen}>
        Create Link
      </Button>

      {isMobile ? (
        <Drawer
          isOpen={isOpen}
          placement={"top"}
          initialFocusRef={firstField}
          onClose={onClose}
          size="sm"
          closeOnOverlayClick={false}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Create a new Short Link
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="url">Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>
                      <LinkIcon />
                    </InputLeftAddon>
                    <Input
                      ref={firstField}
                      type="url"
                      id="url"
                      placeholder="Please enter URL"
                      onChange={inputUrlHandler}
                      disabled={isSubmit}
                      value={url}
                      required={true}
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px" gap={5}>
              <Button
                colorScheme="teal"
                onClick={submitHandler}
                isDisabled={!isInputValid}
              >
                {isSubmit ? (
                  <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
                ) : (
                  "Convert"
                )}
              </Button>
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <Modal
          initialFocusRef={initialRef}
          finalFocusRef={finalRef}
          isOpen={isOpen}
          onClose={onClose}
          isCentered
          closeOnOverlayClick={false}
        >
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Create a new Short Link</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <InputGroup>
                <InputLeftAddon>
                  <LinkIcon />
                </InputLeftAddon>
                <Input
                  ref={firstField}
                  type="url"
                  id="url"
                  placeholder="Please enter URL"
                  onChange={inputUrlHandler}
                  disabled={isSubmit}
                  value={url}
                />
              </InputGroup>
            </ModalBody>

            <ModalFooter>
              <Button
                colorScheme="teal"
                mr={3}
                onClick={submitHandler}
                isDisabled={!isInputValid}
              >
                {isSubmit ? (
                  <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
                ) : (
                  "Convert"
                )}
              </Button>
              <Button onClick={onClose}>Cancel</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default Section2;
