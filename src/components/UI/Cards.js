import React from "react";
import { Card, CardBody, Stack, Image, Text, Button } from "@chakra-ui/react";
import classes from "./Card.module.css";
import { CopyIcon, EditIcon, ViewIcon } from "@chakra-ui/icons";
import { CopyToClipboard } from "react-copy-to-clipboard";

// For View Link Popover
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverCloseButton,
} from "@chakra-ui/react";

const Cards = (props) => {
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
                <Popover placement="auto">
                  <PopoverTrigger>
                    <Button>
                      <ViewIcon />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent border={"2px solid black"}>
                    <PopoverCloseButton className={classes.popOverCloseBtn} />
                    <PopoverHeader className={classes.popOverHeader}>
                      Short Link
                    </PopoverHeader>
                    <PopoverBody className={classes.popOverBody}>
                      {props.link}
                      <CopyToClipboard
                        text={props.link}
                        className={classes.copyButton}
                      >
                        <button>
                          <CopyIcon />
                        </button>
                      </CopyToClipboard>
                    </PopoverBody>
                  </PopoverContent>
                </Popover>
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
