import React from "react";
import classes from "./Section2.module.css";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";

const Section2 = () => {
  return (
    <section className={classes.section2}>
      <div className={classes.title}>Features</div>
      <Container
        maxW={"xl"}
        // display={"flex"}
        // justifyContent={"center"}
        // alignItems={"center"}
      >
        <Grid templateColumns="repeat(2, 1fr)" gap={3}>
          <GridItem>
            <Card height="200px" background={"#0F0F0F"}>
              <CardBody>
                <Text
                  position="absolute"
                  bottom="4"
                  left="3"
                  right="3"
                  fontSize={"22.9px"}
                  color={"#FFFFFF"}
                  whiteSpace="pre-line" // Add this line
                  fontFamily="circular-std-medium"
                >
                  Effortless Link <br />
                  Shortening
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
                  fontSize={"22.9px"}
                  whiteSpace="pre-line" // Add this line
                  fontFamily="circular-std-medium"
                >
                  Customize <br /> Short URLs
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
                  fontSize={"22.9px"}
                  fontFamily="circular-std-medium"
                >
                  User Friendly
                  <br /> Dash-board
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
                  fontSize={"22.9px"}
                  color={"#FFFFFF"}
                  fontFamily="circular-std-medium"
                >
                  Powerful Link <br /> Analytics
                </Text>
              </CardBody>
            </Card>
          </GridItem>
        </Grid>
      </Container>
    </section>
  );
};

export default Section2;
