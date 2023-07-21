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

const CityCard = (props) => {
  let cityData = props.cityData;
  const totalClicks = props.totalClicks;

  const [showMore, setShowMore] = useState(false);

  const handleClick = () => {
    setShowMore(!showMore);
  };

  if (cityData === null) {
    cityData = [];
  }

  let cityArr = [];
  if (cityData !== undefined) {
    cityData.map((city) => {
      let cityName = Object.keys(city).toString();
      let curValue = city[cityName];
      let newValue = (curValue / totalClicks) * 100;
      let obj = { [cityName]: newValue };
      cityArr.push(obj);

      return cityArr.sort((a, b) => {
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
    >
      <CardHeader className={classes.header} height="50px">
        <Text className={classes.headerText}>City</Text>
      </CardHeader>
      <CardBody>
        {cityArr.length > 0 ? (
          <>
            {!showMore
              ? cityArr.slice(0, 2).map((data) => {
                  let cityName = Object.keys(data).toString();
                  let curValue = data[cityName];
                  return (
                    <li key={cityName}>
                      <Text>{cityName}</Text>
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
                          id={cityName}
                          value={curValue}
                        />
                        <Text>{curValue.toFixed(0)}%</Text>
                      </Stack>
                    </li>
                  );
                })
              : cityArr.map((data) => {
                  let cityName = Object.keys(data).toString();
                  let curValue = data[cityName];
                  return (
                    <li key={cityName}>
                      <Text>{cityName}</Text>
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
                          id={cityName}
                          value={curValue}
                        />
                        <Text>{curValue.toFixed(0)}%</Text>
                      </Stack>
                    </li>
                  );
                })}
            {cityArr.length > 2 && (
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

export default CityCard;
