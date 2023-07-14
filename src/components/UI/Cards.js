import React from "react";
import { Card, CardBody, Stack, Image, Text } from "@chakra-ui/react";
import classes from "./Card.module.css";

const Cards = (props) => {
  return (
    <Card maxW="300px" h={220} className={classes.card1}>
      <CardBody>
        <Stack direction={"column"} spacing="24px">
          <Stack direction={"row"} justifyContent={"space-around"} spacing="3">
            <Stack direction={"column"}>
              <button>Show Link</button>
              <button>Edit</button>
            </Stack>
            <Image
              src={props.image}
              objectFit="contain"
              width={105}
              borderRadius={7}
            />
          </Stack>
          <Text noOfLines={2}>{props.title}</Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Cards;
