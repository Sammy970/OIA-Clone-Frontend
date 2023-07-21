import React from "react";
import classes from "./DisplayCard.module.css";
import { Card, CardBody, Image, Stack, Text } from "@chakra-ui/react";

const DisplayCard = (props) => {
  return (
    <Card
      maxW="full"
      className={classes.card1}
      boxShadow={{ base: "5px 5px 0px black", sm: "5px 5px 0px black" }}
      border={"2px solid black"}
    >
      <CardBody>
        <Stack direction={"row"} justifyContent={"space-between"}>
          <Stack direction={"column"} width={"full"} className={classes.text}>
            <Text className={classes.header}>Title</Text>
            <Text noOfLines={2}>{props.title}</Text>
            <Text className={classes.header}>Description</Text>
            <Text noOfLines={2}>{props.description}</Text>
          </Stack>
          <Stack direction={"column"} alignSelf={"center"}>
            <Image
              src={props.image}
              objectFit={"cover"}
              width={190}
              borderRadius={7}
            />
          </Stack>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default DisplayCard;
