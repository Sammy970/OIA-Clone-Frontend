import { Box } from "@chakra-ui/react";
import React from "react";
import classes from "./Section3.module.css";

const Section3 = () => {
  return (
    <section className={classes.section3}>
      <Box
        as="marquee"
        direction="left"
        scrollamount="10"
        height="10%"
        width="100%"
        whiteSpace="nowrap"
        fontSize="25px"
        fontWeight="700"
        color={"#0f0f0e"}
        fontFamily="circular-std-light"
      >
        FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;FREE TO
        USE&nbsp;&nbsp;&nbsp;FREE TO USE&nbsp;&nbsp;&nbsp;
      </Box>
    </section>
  );
};

export default Section3;
