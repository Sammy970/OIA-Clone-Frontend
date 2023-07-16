import React, { useState } from "react";

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
  InputGroup,
  InputLeftAddon,
  Textarea,
  Image,
  Center,
} from "@chakra-ui/react";

import { EditIcon } from "@chakra-ui/icons";

const EditButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const [titleData, setTitleData] = useState(props.title);
  const [descData, setDescData] = useState(props.title);

  const titleChangeHandler = (event) => {
    setTitleData(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDescData(event.target.value);
  };

  const closeDrawer = () => {
    setTitleData(props.title);
    setDescData(props.title);
    onClose();
  };

  return (
    <>
      <Button onClick={onOpen}>
        <EditIcon />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        initialFocusRef={firstField}
        onClose={closeDrawer}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">
            Edit your Link Appreance
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="shortUrl">Links</FormLabel>
                <Stack direction="column">
                  <InputGroup>
                    <InputLeftAddon children="OG Link" />
                    <Box
                      // Apply CSS styles for scrolling
                      overflowX="auto"
                      width={"full"}
                      whiteSpace="nowrap"
                    >
                      <Input
                        type="text"
                        placeholder={props.ogLink}
                        isDisabled={true}
                        defaultValue={props.ogLink}
                      />
                    </Box>
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon children="Short Link" />
                    <Input
                      type="text"
                      placeholder={props.link}
                      isDisabled={true}
                      defaultValue={props.link}
                    />
                  </InputGroup>
                </Stack>
              </Box>

              <Box>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  ref={firstField}
                  id="title"
                  placeholder="Please enter a title"
                  value={titleData}
                  onChange={titleChangeHandler}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  id="desc"
                  minH={"90px"}
                  value={descData}
                  onChange={descChangeHandler}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="image">Image</FormLabel>
                <Center>
                  <Image
                    src={props.image}
                    width={"300px"}
                    objectFit={"contain"}
                  />
                </Center>
              </Box>
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={closeDrawer}>
              Cancel
            </Button>
            <Button colorScheme="blue">Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditButton;
