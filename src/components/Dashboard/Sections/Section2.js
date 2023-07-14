import React from "react";
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
  InputRightAddon,
  InputLeftAddon,
  InputGroup,
  Select,
  Textarea,
  useBreakpointValue,
} from "@chakra-ui/react";
import { AddIcon } from "@chakra-ui/icons";

const Section2 = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = React.useRef();

  const isMobile = useBreakpointValue({ base: true, lg: false });
  const drawerPlacement = isMobile ? "bottom" : "left";
  const drawerSize = isMobile ? "xs" : "sm";

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
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader borderBottomWidth="1px">
              Create a new link
            </DrawerHeader>

            <DrawerBody>
              <Stack spacing="24px">
                <Box>
                  <FormLabel htmlFor="url">Url</FormLabel>
                  <InputGroup>
                    <InputLeftAddon>https://</InputLeftAddon>
                    <Input
                      ref={firstField}
                      type="url"
                      id="url"
                      placeholder="Please enter domain"
                    />
                  </InputGroup>
                </Box>
              </Stack>
            </DrawerBody>

            <DrawerFooter borderTopWidth="1px">
              <Button variant="outline" mr={3} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="blue">Submit</Button>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ) : (
        <p>hello</p>
      )}
    </>
  );
};

export default Section2;
