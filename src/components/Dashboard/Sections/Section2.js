import React from "react";
import classes from "./Section2.module.css";
import Cards from "../../UI/Cards";
import { Grid, GridItem } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <section className={classes.section2}>
      <h2>Links:</h2>
      <Grid
        templateColumns={{ base: "2fr", md: "repeat(3, 1fr)" }}
        align={"center"}
        gap={10}
      >
        <GridItem>
          <Cards />
        </GridItem>
        <GridItem>
          <Cards />
        </GridItem>

        <GridItem>
          <Cards />
        </GridItem>
        <GridItem>
          <Cards />
        </GridItem>
        <GridItem>
          <Cards />
        </GridItem>
        <GridItem>
          <Cards />
        </GridItem>
      </Grid>
    </section>
  );
};

export default Section2;
