import React, { useEffect, useState } from "react";
import {
  Card,
  CardBody,
  Stack,
  Image,
  Text,
  useToast,
  Button,
} from "@chakra-ui/react";
import classes from "./Card.module.css";

import ShowButton from "./ShowButton/ShowButton";
import EditButton from "./EditButton/EditButton";
import { useNavigate } from "react-router-dom";
import DeleteButton from "./DeleteButton/DeleteButton";

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
    <Card
      width={{ base: "full", sm: "90%" }}
      // max-height={"220px"}
      height={{ base: "full", sm: "220px" }}
      className={classes.card1}
      boxShadow={{ base: "5px 5px 0px black", sm: "5px 5px 0px black" }}
      border={"2px solid black"}
    >
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
                <DeleteButton code={props.code} />
              </Stack>
              <Button width={"full"} id={props.code} onClick={analyticsHandler}>
                Analytics
              </Button>
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
            fontSize={"17px"}
            fontFamily={"circular-std-medium"}
            height={{ base: "", sm: "48px" }}
          >
            {props.title}
          </Text>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Cards;
