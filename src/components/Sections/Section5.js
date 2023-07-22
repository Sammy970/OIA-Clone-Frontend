import React from "react";
import classes from "./Section5.module.css";
import { Container, Stack } from "@chakra-ui/react";

const Section5 = () => {
  return (
    <section className={classes.section5}>
      <Container maxW={"900px"}>
        <Stack direction={"column"} alignItems={"center"}>
          <h1>Want to Contact Us ?</h1>
          <h2>Reach out to us ✅</h2>
          <button>
            <a href="mailto:jainsamyak2002.sj@gmail.com">Get In Touch</a>
          </button>
        </Stack>
      </Container>
    </section>
  );
};

export default Section5;
