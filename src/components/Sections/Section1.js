import React from "react";
import classes from "./Section1.module.css";
import { Container } from "@chakra-ui/react";

const Section1 = () => {
  return (
    <section className={classes.section1}>
      <Container maxW={"900px"}>
        <h3>Your Shortcut to Easy Sharing and Snappy URLs!</h3>
        <p>
          Give personality to your{" "}
          <span style={{ textDecoration: "underline" }}>links</span> and{" "}
          <span style={{ textDecoration: "underline" }}>control</span> how they
          are seen.
        </p>
      </Container>
    </section>
  );
};

export default Section1;
