import React, { useEffect, useState } from "react";
import AnalyticsCard from "../AnalyticsCard/AnalyticsCard";
import { Grid, GridItem } from "@chakra-ui/react";
import CityCard from "../CityAndStateCard/CityCard";
import classes from "./Section2.module.css";
import StateCard from "../CityAndStateCard/StateCard";
import CountryCard from "../CityAndStateCard/CountryCard";
import OsCard from "../OsCard/OsCard";

const Section2 = (props) => {
  const [apiData, setApiData] = useState({});
  const [apiCall, setApiCall] = useState(false);

  const code = props.code;

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/analyticsData";
    // const url = "http://localhost:3001/api/analyticsData";
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
  //   console.log(apiData.osName);
  // }

  return (
    <section className={classes.section2}>
      <Grid
        templateColumns={{
          base: "1fr",
          sm: "repeat(2, 1fr)",
          lg: "repeat(4, 1fr)",
        }}
        gap={6}
        mb={10}
      >
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AnalyticsCard
            clicks={apiData.clicks}
            onCall={apiRecall}
            text={"Total Clicks"}
          />
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AnalyticsCard
            topCity={apiData.city}
            totalClicks={apiData.clicks}
            text={"Top City"}
          />
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AnalyticsCard
            topState={apiData.state}
            totalClicks={apiData.clicks}
            text={"Top State"}
          />
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <AnalyticsCard
            topDevice={apiData.osName}
            totalClicks={apiData.clicks}
            text={"Top Device"}
          />
        </GridItem>
      </Grid>

      <Grid
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(3, 1fr)",
        }}
        gap={6}
      >
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CityCard cityData={apiData.city} totalClicks={apiData.clicks} />
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <StateCard stateData={apiData.state} totalClicks={apiData.clicks} />
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <CountryCard
            countryData={apiData.country}
            totalClicks={apiData.clicks}
          />
        </GridItem>
        <GridItem
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <OsCard osName={apiData.osName} />
        </GridItem>
      </Grid>
    </section>
  );
};

export default Section2;
