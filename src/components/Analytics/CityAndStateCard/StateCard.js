import React, { useState } from "react";
import classes from "./CityCard.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

const StateCard = (props) => {
  let stateData = props.stateData;
  const totalClicks = props.totalClicks;

  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  if (stateData === null) {
    stateData = [];
  }

  let stateArr = [];
  if (stateData !== undefined) {
    stateData.map((state) => {
      let stateName = Object.keys(state).toString();
      let curValue = state[stateName];
      let newValue = (curValue / totalClicks) * 100;
      let obj = { [stateName]: newValue };
      stateArr.push(obj);

      return stateArr.sort((a, b) => {
        const valueA = Object.values(a)[0];
        const valueB = Object.values(b)[0];

        // Sort in descending order
        return valueB - valueA;
      });
    });
  }

  return (
    <Card height="full" width={{ base: "90%", lg: "full" }}>
      <CardHeader className={classes.header} height="50px">
        <Text className={classes.headerText}>City</Text>
      </CardHeader>
      <CardBody>
        {stateArr.length > 0 ? (
          <>
            {!showMore
              ? stateArr.slice(0, 2).map((data) => {
                  let stateName = Object.keys(data).toString();
                  let curValue = data[stateName];
                  return (
                    <li key={stateName}>
                      <Text>{stateName}</Text>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                      >
                        <Progress
                          colorScheme="teal"
                          className={classes.progressBar}
                          size="lg"
                          width={"90%"}
                          borderRadius={7}
                          border={"1px solid #0f0f0e"}
                          id={stateName}
                          value={curValue}
                        />
                        <Text>{curValue.toFixed(0)}%</Text>
                      </Stack>
                    </li>
                  );
                })
              : stateArr.map((data) => {
                  let stateName = Object.keys(data).toString();
                  let curValue = data[stateName];
                  return (
                    <li key={stateName}>
                      <Text>{stateName}</Text>
                      <Stack
                        direction={"row"}
                        justifyContent={"space-around"}
                        alignItems={"center"}
                      >
                        <Progress
                          colorScheme="teal"
                          className={classes.progressBar}
                          size="lg"
                          width={"90%"}
                          borderRadius={7}
                          border={"1px solid #0f0f0e"}
                          id={stateName}
                          value={curValue}
                        />
                        <Text>{curValue.toFixed(0)}%</Text>
                      </Stack>
                    </li>
                  );
                })}
            {stateArr.length > 2 && (
              <Button
                onClick={handleClick}
                mt={4}
                variant="link"
                colorScheme="blue"
              >
                {showMore ? "View Less" : "View More"}
              </Button>
            )}
          </>
        ) : (
          <Text
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            className={classes.text}
          >
            No clicks yet
          </Text>
        )}
      </CardBody>
    </Card>
  );
};

export default StateCard;
