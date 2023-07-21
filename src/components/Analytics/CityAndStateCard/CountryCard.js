import React, { useState } from "react";
import classes from "./ACard.module.css";
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Progress,
  Stack,
  Text,
} from "@chakra-ui/react";

const CountryCard = (props) => {
  let countryData = props.countryData;
  const totalClicks = props.totalClicks;

  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  if (countryData === null) {
    countryData = [];
  }

  let countryArr = [];
  if (countryData !== undefined) {
    countryData.map((country) => {
      let countryName = Object.keys(country).toString();
      let curValue = country[countryName];
      let newValue = (curValue / totalClicks) * 100;
      let obj = { [countryName]: newValue };
      countryArr.push(obj);

      return countryArr.sort((a, b) => {
        const valueA = Object.values(a)[0];
        const valueB = Object.values(b)[0];

        // Sort in descending order
        return valueB - valueA;
      });
    });
  }

  return (
    <Card
      height="full"
      width={{ sm: "full", base: "90%" }}
      boxShadow={{ base: "", sm: "5px 5px 0px black" }}
      border={"2px solid black"}
    >
      <CardHeader className={classes.header} height="50px">
        <Text className={classes.headerText}>Country</Text>
      </CardHeader>
      <CardBody>
        {countryArr.length > 0 ? (
          <>
            {!showMore
              ? countryArr.slice(0, 2).map((data) => {
                  let countryName = Object.keys(data).toString();
                  let curValue = data[countryName];
                  return (
                    <li key={countryName}>
                      <Text>{countryName}</Text>
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
                          id={countryName}
                          value={curValue}
                        />
                        <Text>{curValue.toFixed(0)}%</Text>
                      </Stack>
                    </li>
                  );
                })
              : countryArr.map((data) => {
                  let countryName = Object.keys(data).toString();
                  let curValue = data[countryName];
                  return (
                    <li key={countryName}>
                      <Text>{countryName}</Text>
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
                          id={countryName}
                          value={curValue}
                        />
                        <Text>{curValue.toFixed(0)}%</Text>
                      </Stack>
                    </li>
                  );
                })}
            {countryArr.length > 2 && (
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

export default CountryCard;
