import React, { useEffect, useState } from "react";
import { Card, CardBody, Stack, Image, Text, useToast } from "@chakra-ui/react";
import classes from "./Card.module.css";

import ShowButton from "./ShowButton/ShowButton";
import EditButton from "./EditButton/EditButton";
import { useNavigate } from "react-router-dom";

const Cards = (props) => {
  const [isCopied, setIsCopied] = useState(false);
  const navigate = useNavigate();

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

  const analyticsHandler = (event) => {
    event.preventDefault();
    // console.log(event.target.id);
    const obj = {
      title: props.title,
      description: props.description,
      image: props.image,
      code: props.code,
    };

    navigate("/dashboard/analytics", { state: { obj } });
  };

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
                <EditButton
                  title={props.title}
                  description={props.description}
                  image={props.image}
                  link={props.link}
                  ogLink={props.ogLink}
                  code={props.code}
                  data={props.data}
                />
              </Stack>
              <button id={props.code} onClick={analyticsHandler}>
                Analytics
              </button>
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
