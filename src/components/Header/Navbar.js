import React from "react";
import classes from "./Navbar.module.css";

import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  return (
    <div className={classes.navbar}>
      <nav className={classes.innerNavbar}>
        <div className={classes.image}>
          <img
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png"
            alt=""
            width={40}
          />
        </div>
        <div className={classes.links}>
          <li>Test 2</li>
          <li>Test 2</li>
          <li>Test 2</li>
        </div>
        <div className={classes.action}>
          <img
            src="https://www.w3.org/html/logo/downloads/HTML5_Logo_256.png"
            alt=""
            width={40}
          />
          <button>Logout</button>
        </div>
        <div className={classes.ham}>
          <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
            <img
              src="https://cdn.iconscout.com/icon/free/png-256/free-hamburger-126-453141.png"
              alt=""
              width={30}
            />
          </Button>
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <p>Test 2</p>
                <p>Test 2</p>
                <p>Test 2</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
