import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  Button,
  useToast,
} from "@chakra-ui/react";
import classes from "./Card.module.css";
import { EditIcon } from "@chakra-ui/icons";

import ShowButton from "./ShowButton/ShowButton";

const Cards = (props) => {
  const [isCopied, setIsCopied] = useState(false);

  // Toast for Link Copied Successfully
  const toast = useToast();
  useEffect(() => {
    if (isCopied) {
      toast({
        title: "Link Copied Successfully ✅",
        status: "info",
        position: "top",
        duration: 3000,
        isClosable: true,
      });
      setIsCopied(false);
    }
  }, [isCopied, toast]);

  return (
    <Card maxW="300px" height={"215px"} className={classes.card1}>
      <CardBody>
        <Stack direction={"column"} spacing="24px">
          <Stack direction={"row"} justifyContent={"space-evenly"} spacing="3">
            <Stack
              direction={"column"}
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
            >
              <Stack
                direction={"row"}
                display={"flex"}
                alignItems={"center"}
                justifyContent={"space-around"}
              >
                <ShowButton link={props.link} setIsCopied={setIsCopied} />
                <Button>
                  <EditIcon />
                </Button>
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
