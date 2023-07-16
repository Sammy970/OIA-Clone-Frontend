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
  InputGroup,
  InputLeftAddon,
  Textarea,
  Image,
  Center,
} from "@chakra-ui/react";

import classes from "./EditButton.module.css";

import { EditIcon } from "@chakra-ui/icons";
import { useAuth0 } from "@auth0/auth0-react";

const EditButton = (props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const code = props.code;
  const { user } = useAuth0();
  const email = user.email;

  // State for API Response Data
  const [apiData, setApiData] = useState("");

  // Local Data Updatation
  const [titleData, setTitleData] = useState(props.title);
  const [descData, setDescData] = useState(props.description);

  // Data edited to be sent to the MongoDB to store
  const [dataToBeSent, setDataToBeSent] = useState({});

  // Functions to handle local data
  const titleChangeHandler = (event) => {
    setTitleData(event.target.value);
  };

  const descChangeHandler = (event) => {
    setDescData(event.target.value);
  };

  // Function to handle close drawer when clicked on "cancel"
  const closeDrawer = () => {
    setTitleData(props.title);
    setDescData(props.title);
    onClose();
  };

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/editUserLinks";
    // const url = "http://localhost:3001/api/editUserLinks";

    const bodyContent = {
      data: dataToBeSent,
      code: code,
      email: email,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: { "Content-Type": "application/json" },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setApiData(json); // Update the state with fetched data
      } catch (error) {
        console.log("error", error);
      }
    };

    if (Object.keys(dataToBeSent).toString() !== "") {
      console.log("I am in useffect");
      fetchData();
    }
  }, [dataToBeSent, code, email]);

  const submitHandler = () => {
    console.log("Hello, i am in Submithandler");
    const dataToEdit = props.data[props.code].ogMetadata;
    dataToEdit["og:title"] = titleData;
    dataToEdit["og:description"] = descData;
    setDataToBeSent(props.data);
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
        <DrawerContent className={classes.drawerContent}>
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
            <Button className={classes.submitBtn} onClick={submitHandler}>
              Submit
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default EditButton;
