import React, { useEffect, useState } from "react";

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

const Section2 = () => {
  const [url, setUrl] = useState("");
  const [apiData, setApiData] = useState("");
  const [callApi, setCallApi] = useState(false);

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
    setUrl(event.target.value);
  };

  // UseEffect hook for API Call to convert links

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const json = await response.json();
        console.log(json);
        setApiData(json); // Update the state with fetched data
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [apiUrl]);

  // URL Submission Handler
  const submitHandler = (event) => {
    event.preventDefault();
    setApiUrl(`https://oia.vercel.app/generate?link=${url}&email=${email}`);
  };

  // console.log(apiData);

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
                      value={url}
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button colorScheme="blue" onClick={submitHandler}>
                Convert
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
                  value={url}
                />
              </InputGroup>
            </ModalBody>

            <ModalFooter>
              <Button colorScheme="blue" mr={3} onClick={submitHandler}>
                Convert
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
