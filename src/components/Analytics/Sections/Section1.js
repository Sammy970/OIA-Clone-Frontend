import React from "react";
import classes from "./Section1.module.css";
import DisplayCard from "../DisplayCard/DisplayCard";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Button, Stack } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const Section1 = (props) => {
  return (
    <section className={classes.section1}>
      <Stack direction={"column"} mb={7}>
        <h3>Analysis for,</h3>
        <Stack direction={"row"} alignItems={"center"} gap={5}>
          <h3>"{props.code}"</h3>
          <Link to={`https://oia.vercel.app/${props.code}`} target="_blank">
            <Button bg={"rgb(128, 200, 161)"} color={"#0f0f0e"}>
              <ExternalLinkIcon />
            </Button>
          </Link>
        </Stack>
      </Stack>
      <DisplayCard
        image={props.image}
        title={props.title}
        description={props.description}
      />
    </section>
  );
};

export default Section1;
