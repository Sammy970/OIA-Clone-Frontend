import React from "react";
import classes from "./Section1.module.css";
import { Container, Image, Stack } from "@chakra-ui/react";
import headImage from "../../Assets/section1.png";

const Section1 = () => {
  return (
    <section className={classes.section1}>
      <Container maxW={"1100px"}>
        <Stack
          direction={"row"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={10}
        >
          <Stack direction={"column"}>
            <h3>Your Shortcut to Easy Sharing and Snappy URLs!</h3>
            <p>
              Give personality to your{" "}
              <span style={{ textDecoration: "underline" }}>links</span> and{" "}
              <span style={{ textDecoration: "underline" }}>control</span> how
              they are seen.
            </p>
          </Stack>
          <Image
            src={headImage}
            display={{ base: "none", md: "block" }}
            width={"50%"}
          />
        </Stack>
      </Container>
    </section>
  );
};

export default Section1;
