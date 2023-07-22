import React, { useState } from "react";
import classes from "./Section2.module.css";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

import icon1Img from "../../Assets/url_short_icon.png";
import icon2Img from "../../Assets/link_preview_icon.png";
import icon3Img from "../../Assets/share-location.png";
import icon4Img from "../../Assets/deep.png";
import icon5Img from "../../Assets/analytics.png";

const cardData = [
  {
    title: "Effortless Link Shortening",
    background: "#0F0F0F",
    content:
      "Streamline sharing with our quick link shortening feature, converting lengthy URLs into concise, shareable links effortlessly.",
    color: "#FFFFFF",
    x: "50%",
    y: "50%",
  },
  {
    title: "Customize Short URLs",
    background: "#FFFFFF",
    content:
      "Infuse your brand identity by customizing short links with unique aliases or keywords, making them memorable and engaging.",
    color: "#0f0f0e",
    x: "-50%",
    y: "50%",
  },
  {
    title: "User Friendly Dashboard",
    background: "#FFFFFF",
    content:
      "Seamlessly manage all your links, analytics, and settings through our intuitive friendly dashboard, simplifying link management.",
    color: "#0F0F0F",
    x: "50%",
    y: "-50%",
  },
  {
    title: "Powerful Link Analytics",
    background: "#0F0F0F",
    content:
      "Unleash the potential of your links with robust analytics, gathering valuable insights to optimize your strategies.",
    color: "#FFFFFF",
    x: "-50%",
    y: "-50%",
  },
];

const Section2 = () => {
  const [centeredCard, setCenteredCard] = useState(null);

  const handleCardClick = (index) => {
    setCenteredCard(centeredCard === index ? null : index);
  };

  return (
    <>
      <section className={classes.section2}>
        <Container maxW={"900px"} className={classes.container1}>
          <div className={classes.title}>Features</div>
          <Container maxW={"2xl"}>
            <Grid templateColumns="repeat(2, 1fr)" gap={3}>
              {cardData.map((card, index) => (
                <GridItem key={index}>
                  <motion.div
                    style={{
                      zIndex: centeredCard === index ? 2 : 1,
                      position: "relative",
                    }}
                    animate={{
                      x: centeredCard === index ? card.x : 0,
                      y: centeredCard === index ? card.y : 0, // Change y value to -50%
                      scale: centeredCard === index ? 1.3 : 0.9,
                    }}
                    initial={{ scale: 0.88 }}
                    transition={{ type: "tween" }}
                    onClick={() => handleCardClick(index)}
                  >
                    <Card height="200px" background={"#0F0F0F"}>
                      <CardBody padding={"15px"}>
                        {centeredCard !== index && (
                          <Text
                            position="absolute"
                            bottom="4"
                            left="3"
                            right="3"
                            fontSize={{ base: "22.9px", sm: "26px" }}
                            color={"#FFFFFF"}
                            whiteSpace="pre-line"
                            fontFamily="circular-std-medium"
                          >
                            {card.title}
                          </Text>
                        )}
                        {centeredCard === index && (
                          <Text
                            color={"#FFFFFF"}
                            fontSize={{ base: "14.3", sm: "19" }}
                            fontFamily={"circular-std-light"}
                          >
                            {card.content}
                          </Text>
                        )}
                      </CardBody>
                    </Card>
                  </motion.div>
                </GridItem>
              ))}
            </Grid>
          </Container>
        </Container>

        <Container maxW={"1000px"} className={classes.container2}>
          <div className={classes.title2}>
            <span className={classes.five}>Five</span> Ways to use our Service
          </div>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              sm: "repeat(1, 322px)",
              md: "repeat(2, 322px)",
              lg: "repeat(3, 322px)",
            }}
            gap={{ base: 10, sm: 10, md: 20 }}
            justifyContent={"center"}
          >
            <GridItem>
              <Stack direction={"column"} alignItems={"center"} gap={4}>
                <Image src={icon1Img} width={"70px"} />
                <h1 className={classes.titleName}>
                  1. URL Shortening Made Simple
                </h1>
                <p>
                  Create clean, shareable short links in a snap. Effortlessly
                  shorten long URLs and make it simple for your audience to
                  access and engage with your content.
                </p>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack direction={"column"} alignItems={"center"} gap={4}>
                <Image src={icon2Img} width={"70px"} />
                <h1 className={classes.titleName}>
                  2. Customize Link Previews
                </h1>
                <p>
                  Personalize link previews for higher engagement. Edit titles &
                  descriptions to boost click-through rates across multiple
                  platforms.
                </p>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack direction={"column"} alignItems={"center"} gap={4}>
                <Image src={icon3Img} width={"70px"} />
                <h1 className={classes.titleName}>3. Share Everywhere</h1>
                <p>
                  Share short links on WhatsApp, Facebook, Twitter, Telegram,
                  email & more. Reach a wider audience effortlessly.
                </p>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack direction={"column"} alignItems={"center"} gap={4}>
                <Image src={icon4Img} width={"70px"} />
                <h1 className={classes.titleName}>4. App Deep Linking</h1>
                <p>
                  Seamless user experience - direct links to installed apps. No
                  repeated logins, enhanced accessibility.
                </p>
              </Stack>
            </GridItem>
            <GridItem>
              <Stack direction={"column"} alignItems={"center"} gap={4}>
                <Image src={icon5Img} width={"70px"} />
                <h1 className={classes.titleName}>5. In-Depth Analytics</h1>
                <p>
                  Gain valuable link insights with detailed analytics. Track
                  clicks, top cities, states, countries, popular devices, and
                  visualize access over time.
                </p>
              </Stack>
            </GridItem>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Section2;
