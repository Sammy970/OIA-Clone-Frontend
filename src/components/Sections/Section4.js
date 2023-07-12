import React from "react";
import {
  Card,
  CardBody,
  Button,
  Heading,
  Stack,
  Image,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import classes from "./Section4.module.css";

const Section4 = () => {
  return (
    <section className={classes.section4}>
      <div className={classes.title}>Creators</div>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        <GridItem align="center">
          <Card maxW="sm" align="center" className={classes.card}>
            <CardBody>
              <Image
                src="https://avatars.githubusercontent.com/u/70690987?v=4"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack
                mt="6"
                textAlign="center"
                direction={"row"}
                spacing="3"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Heading size="md" className={classes.text}>
                  Samyak Jain
                </Heading>
                <Button align={"center"} variant="solid">
                  <a
                    href="https://www.linkedin.com/in/samyak-jain-3a6639172/"
                    alt="link to Samyak Jain's LinkedIn"
                  >
                    LinkedIn
                  </a>
                </Button>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
        <GridItem align="center">
          <Card maxW="sm" align="center" className={classes.card}>
            <CardBody>
              <Image
                src="https://avatars.githubusercontent.com/u/96584784?v=4"
                borderRadius="lg"
              />
              <Stack
                mt="6"
                direction={"row"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing="3"
              >
                <Heading size="md" className={classes.text}>
                  Rutuj Saraf
                </Heading>
                <Button align={"center"} variant="solid">
                  <a
                    href="https://www.linkedin.com/in/rutuj-saraf-597994228/"
                    alt="link to Rutuj Saraf's LinkedIn"
                  >
                    LinkedIn
                  </a>
                </Button>
              </Stack>
            </CardBody>
          </Card>
        </GridItem>
      </Grid>
    </section>
  );
};

export default Section4;
