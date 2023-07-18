import React from "react";
import { Button, Card, CardBody, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowsRotate,
  faHandPointer,
} from "@fortawesome/free-solid-svg-icons";
import classes from "./AnalyticsCard.module.css";

const AnalyticsCard = (props) => {
  let clicks;
  if (props.clicks !== undefined) {
    clicks = props.clicks;
  } else {
    clicks = 0;
  }
  return (
    <Card height="150px" width="200px">
      <CardBody>
        <Text
          position="absolute"
          bottom="14"
          right="1"
          left="5"
          fontSize={"19px"}
          fontFamily="circular-std-light"
        >
          Total Clicks
        </Text>
        <Text
          position="absolute"
          bottom="0"
          fontSize={"40px"}
          color={"#0f0f0e"}
          whiteSpace="pre-line" // Add this line
          fontFamily="circular-std-medium"
        >
          {clicks}
        </Text>
        <Text position="absolute" right="5" top="3">
          <FontAwesomeIcon
            icon={faHandPointer}
            beat
            size="2xl"
            style={{ color: "#ffd13a" }}
          />
        </Text>
        <Button
          className={classes.reloadBtn}
          position="absolute"
          bottom="3.5"
          right="3"
          bg={"#ffd13a"}
          onClick={props.onCall}
        >
          <FontAwesomeIcon icon={faArrowsRotate} />
        </Button>
      </CardBody>
    </Card>
  );
};

export default AnalyticsCard;
