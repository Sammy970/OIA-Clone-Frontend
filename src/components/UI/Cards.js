import React from "react";
import { Card, CardBody, Stack, Image, Text } from "@chakra-ui/react";
import classes from "./Card.module.css";

const Cards = () => {
  return (
    <Card maxW="300px" className={classes.card1}>
      <CardBody>
        <Stack direction={"column"} spacing="24px">
          <Stack direction={"row"} justifyContent={"space-around"} spacing="3">
            <Stack direction={"column"}>
              <button>Show Link</button>
              <button>Edit</button>
            </Stack>
            <Image
              src="https://c.saavncdn.com/972/Adipurush-Hindi-2023-20230607184755-500x500.jpg"
              width={100}
              borderRadius={7}
            />
          </Stack>
          <Text noOfLines={2}>
            Shivoham (Full Song & Lyrics) - Ajay-Atul, Manoj Muntashir, Ajay
            Gogavale - Download or Listen Free - JioSaavn
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Cards;
