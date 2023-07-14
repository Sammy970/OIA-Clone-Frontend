import React from "react";
import classes from "./Navbar.module.css";

// Importing for ChakraUI-React
import {
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
  Stack,
} from "@chakra-ui/react";

import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverArrow,
  PopoverCloseButton,
} from "@chakra-ui/react";

// Importing Auth0
import { useAuth0 } from "@auth0/auth0-react";

// Importing for React-Router-Dom
import { Link } from "react-router-dom";

// Importing UI Components
import LoginButton from "../UI/LoginButton";
import LogoutButton from "../UI/LogoutButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();

  const { user, isLoading, isAuthenticated } = useAuth0();

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
            <Link to="/">
              <h2>link-कर</h2>
            </Link>
          </div>
          <div className={classes.links}>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
            <li>About</li>
          </div>
        </div>
        <div className={classes.action}>
          {isLoading ? (
            <FontAwesomeIcon
              icon={faSpinner}
              spin
              size="2xl"
              style={{ color: "#0f0f0e" }}
            />
          ) : (
            user !== undefined && (
              <Popover>
                <PopoverTrigger>
                  {isLoading === false && isAuthenticated === true && (
                    <img src={user.picture} alt="user" width={50} />
                  )}
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Hello, {user.name}</PopoverHeader>
                  <PopoverBody>Email: {user.email}</PopoverBody>
                </PopoverContent>
              </Popover>
            )
          )}

          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
        </div>
        <div className={classes.ham}>
          {isLoading === false && isAuthenticated === true && (
            <img
              src={user.picture}
              alt="user"
              width={50}
              className={classes.user}
            />
          )}
          <button
            ref={btnRef}
            onClick={onOpen}
            className={classes.hamburgerBtn}
          >
            <img
              src="https://icon-library.com/images/white-hamburger-menu-icon/white-hamburger-menu-icon-24.jpg"
              alt=""
              width={50}
              className={classes.menuIcon}
            />
          </button>
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
              <DrawerBody className={classes.actions}>
                <Stack direction={"row"} className={classes.user}>
                  {isLoading ? (
                    <FontAwesomeIcon
                      icon={faSpinner}
                      spin
                      size="2xl"
                      style={{ color: "#0f0f0e" }}
                    />
                  ) : (
                    user !== undefined && (
                      <Popover>
                        <PopoverTrigger>
                          {isLoading === false && isAuthenticated === true && (
                            <img src={user.picture} alt="user" width={70} />
                          )}
                        </PopoverTrigger>
                        <PopoverContent>
                          <PopoverArrow />
                          <PopoverCloseButton />
                          <PopoverHeader>Hello, {user.name}</PopoverHeader>
                          <PopoverBody>Email: {user.email}</PopoverBody>
                        </PopoverContent>
                      </Popover>
                    )
                  )}

                  {isAuthenticated ? <LogoutButton /> : <LoginButton />}
                </Stack>

                <Link
                  to="/dashboard"
                  className={classes.hamburgerOptions}
                  onClick={onClose}
                >
                  Dashboard
                </Link>

                <Link className={classes.hamburgerOptions}>About</Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
