import React, { useState } from "react";
import classes from "./Section2.module.css";
import { Card, CardBody, Text } from "@chakra-ui/react";
import { Grid, GridItem } from "@chakra-ui/react";
import { Container } from "@chakra-ui/react";
import { motion } from "framer-motion";

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
    <section className={classes.section2}>
      <Container maxW={"900px"}>
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
    </section>
  );
};

export default Section2;
