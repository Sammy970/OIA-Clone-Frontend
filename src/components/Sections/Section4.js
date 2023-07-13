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
  Divider,
} from "@chakra-ui/react";
import classes from "./Section4.module.css";

const Section4 = () => {
  return (
    <section className={classes.section4}>
      <div className={classes.title}>Who are we ?</div>

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={6}>
        <GridItem align="center">
          <Card maxW="326" align="center" className={classes.card1}>
            <CardBody>
              <Image
                src="https://avatars.githubusercontent.com/u/70690987?v=4"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />

              <Stack
                mt="6"
                textAlign="center"
                direction={"column"}
                spacing="3"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Heading size="md" className={classes.text1}>
                  Samyak Jain [Co-Founder]
                </Heading>
                <Divider />
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
          <Card maxW="326" align="center" className={classes.card1}>
            <CardBody>
              <Image
                src="https://avatars.githubusercontent.com/u/96584784?v=4"
                borderRadius="lg"
              />
              <Stack
                mt="6"
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing="3"
              >
                <Heading size="md" className={classes.text1}>
                  Rutuj Saraf [Co-Founder]
                </Heading>
                <Divider />
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
