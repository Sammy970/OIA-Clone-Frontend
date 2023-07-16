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

import classes from "./EditButton.module.css";

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
          <DrawerHeader borderBottomWidth="1px" className={classes.header}>
            Edit your Link Appreance
          </DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="shortUrl">Links</FormLabel>
                <Stack direction="column">
                  <InputGroup
                    display={"flex"}
                    justifyContent={"space-between"}
                    alignItems={"center"}
                  >
                    <InputLeftAddon
                      children="OG Link"
                      className={classes.inputAddon}
                    />
                    <Textarea
                      type="text"
                      _disabled={{ opacity: "1" }}
                      placeholder={props.ogLink}
                      isDisabled={true}
                      defaultValue={props.ogLink}
                      className={classes.urlText}
                      style={{}}
                    />
                  </InputGroup>
                  <InputGroup>
                    <InputLeftAddon
                      children="Short Link"
                      className={classes.inputAddon}
                    />
                    <Input
                      type="text"
                      _disabled={{ opacity: "1" }}
                      placeholder={props.link}
                      isDisabled={true}
                      defaultValue={props.link}
                      className={classes.urlText}
                    />
                  </InputGroup>
                </Stack>
              </Box>

              <Box>
                <FormLabel htmlFor="title">Title</FormLabel>
                <Input
                  // ref={firstField}
                  id="title"
                  placeholder="Please enter a title"
                  value={titleData}
                  onChange={titleChangeHandler}
                  className={classes.insideText}
                />
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Description</FormLabel>
                <Textarea
                  id="desc"
                  minH={"90px"}
                  value={descData}
                  onChange={descChangeHandler}
                  className={classes.insideText}
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
            <Button className={classes.submitBtn}>Submit</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditButton;
