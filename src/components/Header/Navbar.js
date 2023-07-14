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
  Button,
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
          {isLoading === false && isAuthenticated === true ? (
            <img src={user.picture} alt="user" width={50} />
          ) : (
            isLoading && (
              <FontAwesomeIcon
                icon={faSpinner}
                spin
                size="2xl"
                style={{ color: "#0f0f0e" }}
              />
            )
          )}
          {isAuthenticated ? <LogoutButton /> : <LoginButton />}
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
              <DrawerBody className={classes.actions}>
                <button className={classes.hamburgerOptions} onClick={onClose}>
                  <Link to="/dashboard">Dashboard</Link>
                </button>
                <button className={classes.hamburgerOptions}>About</button>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
