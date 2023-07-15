import React from "react";
import { Card, CardBody, Stack, Image, Text } from "@chakra-ui/react";
import classes from "./Card.module.css";
import { EditIcon, ViewIcon } from "@chakra-ui/icons";

const Cards = (props) => {
  return (
    <Card maxW="300px" height={"215px"} className={classes.card1}>
      <CardBody>
        <Stack direction={"column"} spacing="24px">
          <Stack direction={"row"} justifyContent={"space-evenly"} spacing="3">
            <Stack direction={"column"}>
              <Stack
                direction={"row"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <button>
                  <ViewIcon />
                </button>
                <button>
                  <EditIcon />
                </button>
              </Stack>
              <button>Analytics</button>
            </Stack>
            <Image
              src={props.image}
              objectFit="cover"
              width={150}
              height={105}
              borderRadius={7}
              border={"2px solid black"}
            />
          </Stack>
          <Text
            noOfLines={2}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            height={"48px"}
          >
            {props.title}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Cards;
