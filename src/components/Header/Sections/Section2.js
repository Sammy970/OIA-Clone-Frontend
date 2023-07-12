import React from "react";
import classes from "./Section2.module.css";
import { Card, CardHeader, CardBody, CardFooter, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <section className={classes.section2}>
      <div className={classes.title}>Features</div>
      <Grid templateColumns="repeat(2, 1fr)" gap={4}>
        <GridItem>
          <Card height="200px" background={"#0F0F0F"}>
            <CardBody>
              <Text
                position="absolute"
                bottom="4"
                left="3"
                right="9"
                fontSize={"24px"}
                color={"#FFFFFF"}
              >
                Effortless Link Shortening
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card height="200px">
            <CardBody>
              <Text
                position="absolute"
                bottom="4"
                left="3"
                right="3"
                fontSize={"24px"}
              >
                Customizable Short URLs
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card height="200px">
            <CardBody>
              <Text
                position="absolute"
                bottom="4"
                left="3"
                right="9"
                fontSize={"24px"}
              >
                Intuitive Dashboard
              </Text>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem>
          <Card height="200px" background={"#0F0F0F"}>
            <CardBody>
              <Text
                position="absolute"
                bottom="4"
                left="3"
                right="9"
                fontSize={"24px"}
                color={"#FFFFFF"}
              >
                Powerful Link Analytics
              </Text>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </section>
  );
};

export default Section2;
