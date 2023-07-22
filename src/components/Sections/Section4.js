import React from "react";
import {
  Button,
  Heading,
  Stack,
  Image,
  Grid,
  GridItem,
  Divider,
  Avatar,
  Container,
} from "@chakra-ui/react";
import classes from "./Section4.module.css";

const Section4 = () => {
  return (
    <section className={classes.section4}>
      <Container maxW={"900px"}>
        <div className={classes.title}>
          <h1>Who are we ?</h1>
          <h3 className={classes.tagLine}>Builders, Dreamers, Explorers!</h3>
        </div>

        <Grid
          templateColumns={{ base: "1fr", sm: "repeat(2, 0.5fr)" }}
          gap={{ base: 8, sm: "" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <GridItem w={"320px"}>
            <Stack align="center" className={classes.card}>
              <Avatar
                // size="4xl"
                width={200}
                height={200}
                name="Samyak Jain"
                src="https://avatars.githubusercontent.com/u/70690987?v=4"
              />

              <Stack
                mt="6"
                textAlign="center"
                direction={"column"}
                spacing="3"
                alignItems={"center"}
                justifyContent={"center"}
              >
                <Heading size="md" className={classes.text}>
                  Samyak Jain [Co-Founder]
                </Heading>
                <Divider />
                <Stack direction={"row"}>
                  <Button align={"center"} variant="solid">
                    <a
                      href="https://www.linkedin.com/in/samyak-jain-3a6639172/"
                      alt="link to Samyak Jain's LinkedIn"
                    >
                      <Stack direction={"row"} gap={1}>
                        <h1>LinkedIn</h1>
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                          width={5}
                          ml={2}
                        />
                      </Stack>
                    </a>
                  </Button>
                  <Button align={"center"} variant="solid">
                    <a
                      href="https://github.com/Sammy970"
                      alt="link to Samyak Jain's GitHub"
                    >
                      <Stack direction={"row"} gap={1}>
                        <h1>GitHub</h1>
                        <Image
                          src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                          width={5}
                          ml={2}
                        />
                      </Stack>
                    </a>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
          <GridItem justifyContent={"center"} w={"320px"}>
            <Stack align="center" className={classes.card}>
              <Avatar
                // size="4xl"
                width={200}
                height={200}
                name="Rutuj Saraf"
                src="https://avatars.githubusercontent.com/u/96584784?v=4"
              />

              <Stack
                mt="6"
                direction={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                spacing="3"
              >
                <Heading size="md" className={classes.text}>
                  Rutuj Saraf [Co-Founder]
                </Heading>
                <Divider />
                <Stack direction={"row"}>
                  <Button align={"center"} variant="solid">
                    <a
                      href="https://www.linkedin.com/in/rutuj-saraf-597994228/"
                      alt="link to Samyak Jain's LinkedIn"
                    >
                      <Stack direction={"row"} gap={1}>
                        <h1>LinkedIn</h1>
                        <Image
                          src="https://cdn-icons-png.flaticon.com/512/174/174857.png"
                          width={5}
                          ml={2}
                        />
                      </Stack>
                    </a>
                  </Button>
                  <Button align={"center"} variant="solid">
                    <a
                      href="https://github.com/Rutujsaraf09"
                      alt="link to Samyak Jain's GitHub"
                    >
                      <Stack direction={"row"} gap={1}>
                        <h1>GitHub</h1>
                        <Image
                          src="https://cdn-icons-png.flaticon.com/256/25/25231.png"
                          width={5}
                          ml={2}
                        />
                      </Stack>
                    </a>
                  </Button>
                </Stack>
              </Stack>
            </Stack>
          </GridItem>
        </Grid>
      </Container>
    </section>
  );
};

export default Section4;
