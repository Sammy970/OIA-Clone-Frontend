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
        <div className={classes.logoAndLinks}>
          <div className={classes.image}>
            <img
              src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/95-512.png"
              alt=""
              width={34}
            />
            <h2>link-कर</h2>
          </div>
          <div className={classes.links}>
            <li>Dashboard</li>
            <li>About</li>
          </div>
        </div>
        <div className={classes.action}>
          <img
            src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
            alt=""
            width={40}
          />
          <button>Logout</button>
        </div>
        <div className={classes.ham}>
          <Button
            ref={btnRef}
            onClick={onOpen}
            className={classes.hamburgerBtn}
          >
            <img
              src="https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg"
              alt=""
              width={40}
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
                <p className={classes.hamburgerOptions}>Dashboard</p>
                <p className={classes.hamburgerOptions}>About</p>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
