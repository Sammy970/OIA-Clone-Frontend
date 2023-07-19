import React from "react";
import classes from "./Footer.module.css";
import { Stack, Text, Divider, Button } from "@chakra-ui/react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();

  const navigate = useNavigate();

  const dashboardHandler = () => {
    if (isAuthenticated) {
      navigate("./dashboard");
    } else {
      loginWithRedirect();
    }
  };

  return (
    <>
      <section className={classes.footer}>
        <section className={classes.footer1}>
          <Stack gap={10} className={classes.stack1}>
            <Stack direction={"column"}>
              <Text className={classes.headText}>Ready to get Started?</Text>
              <Text className={classes.subText}>
                Get Access to our service for free!
              </Text>
            </Stack>
            <Button onClick={dashboardHandler}>
              {isAuthenticated ? "Go to Dashboard" : " Try for Free"}
            </Button>
          </Stack>
        </section>

        <Divider />
        <section className={classes.footer2}>
          <Stack direction={"column"}>
            <FontAwesomeIcon
              icon={faHeart}
              bounce
              size="xl"
              style={{ color: "#ffc91f" }}
            />
            <Text className={classes.text}>Made by Samyak & Rutuj</Text>
          </Stack>
        </section>
      </section>
    </>
  );
};

export default Footer;
