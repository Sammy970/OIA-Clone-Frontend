import React from "react";
import classes from "./CityCard.module.css";
import { Card, CardBody, Progress, Stack, Text } from "@chakra-ui/react";

const CityCard = (props) => {
  const cityData = props.cityData;
  const totalClicks = props.totalClicks;

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

  if (cityArr.length > 0) {
    console.log(cityArr);
  }

  //   const cityNames = Object.keys(cityData.city);
  //   console.log(cityNames);
  return (
    <Card height="full" width={{ base: "90%", lg: "full" }}>
      <CardBody>
        {cityArr.length > 0 &&
          cityArr.map((data) => {
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
      </CardBody>
    </Card>
  );
};

export default CityCard;
