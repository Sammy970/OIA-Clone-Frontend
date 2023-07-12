import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Divider,
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

      <Grid templateColumns={{ base: "1fr", md: "repeat(2, 1fr)" }} gap={2}>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://avatars.githubusercontent.com/u/70690987?v=4"
                alt="Green double couch with wooden legs"
                borderRadius="lg"
              />
              <Stack mt="6" textAlign="center" spacing="3">
                <Heading size="md">Samyak Jain</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
        <GridItem>
          <Card maxW="sm">
            <CardBody>
              <Image
                src="https://avatars.githubusercontent.com/u/96584784?v=4"
                borderRadius="lg"
              />
              <Stack mt="6" textAlign="center" spacing="3">
                <Heading size="md">Rutuj Saraf</Heading>
              </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
              <ButtonGroup spacing="2">
                <Button variant="solid" colorScheme="blue">
                  Buy now
                </Button>
                <Button variant="ghost" colorScheme="blue">
                  Add to cart
                </Button>
              </ButtonGroup>
            </CardFooter>
          </Card>
        </GridItem>
      </Grid>
    </section>
  );
};

export default Section4;
