import React, { useEffect, useState } from "react";
import AnalyticsCard from "../AnalyticsCard/AnalyticsCard";
import { Grid, GridItem, Stack } from "@chakra-ui/react";
import CityCard from "../CityCard/CityCard";
import classes from "./Section2.module.css";

const Section2 = (props) => {
  const [apiData, setApiData] = useState({});
  const [apiCall, setApiCall] = useState(false);

  const code = props.code;

  useEffect(() => {
    const url =
      "https://oia-second-backend.vercel.app/api/analytics/analyticsData";
    // const url = "http://localhost:3001/api/analytics/analyticsData";
    const bodyContent = {
      code: code,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: { "Content-Type": "application/json" },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        if (response.status === 201) {
          setApiCall(true);
          const json = await response.json();
          setApiData(json); // Update the state with fetched data
        }
      } catch (error) {
        console.log("error", error);
      }
    };

    if (!apiCall) {
      fetchData();
    } else {
      return;
    }
  }, [code, apiCall]);

  const apiRecall = () => {
    // console.log("Hello");
    setApiCall(!apiCall);
  };

  // if (apiData !== "") {
  //   console.log(apiData);
  // }

  return (
    <section className={classes.section2}>
      <Stack
        direction={{ base: "column", lg: "row" }}
        spacing={4}
        justifyContent={"space-evenly"}
        alignItems={"center"}
      >
        <AnalyticsCard clicks={apiData.clicks} onCall={apiRecall} />
        <CityCard cityData={apiData.city} totalClicks={apiData.clicks} />
      </Stack>
    </section>
  );
};

export default Section2;
