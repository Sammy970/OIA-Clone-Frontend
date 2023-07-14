import React, { useEffect, useState } from "react";
import classes from "./Section3.module.css";
import Cards from "../../UI/Cards";
import { Grid, GridItem } from "@chakra-ui/react";
import { useAuth0 } from "@auth0/auth0-react";

const Section3 = () => {
  // Setting Data State for API - fetchUserLinks
  const [apiData, setApiData] = useState([]);

  // Getting EMAIL of User from Auth0
  const { user } = useAuth0();
  const email = user.email;

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/fetchUserLinks";
    // const url = "http://localhost:3000/api/fetchUserLinks";
    const bodyContent = {
      data: email,
    };

    const options = {
      method: "POST",
      body: JSON.stringify(bodyContent),
      headers: { "Content-Type": "application/json" },
    };

    const fetchData = async () => {
      try {
        const response = await fetch(url, options);
        const json = await response.json();
        setApiData(json); // Update the state with fetched data
      } catch (error) {
        console.log("error", error);
      }
    };

    fetchData();
  }, [email, apiData]);

  // console.log(apiData);

  return (
    <section className={classes.section3}>
      <h2>Links:</h2>
      <Grid
        templateColumns={{ base: "2fr", md: "repeat(3, 1fr)" }}
        align={"center"}
        gap={10}
      >
        {apiData.length === 0 ? (
          <GridItem colSpan= {3} >
            <p className={classes.noDataFound}>No data found </p>
          </GridItem>
        ) : (
          apiData.map((data) => {
            const code = Object.keys(data).toString();
            const image = data[code].ogMetadata["og:image"];
            const title = data[code].ogMetadata["og:title"];
            return (
              <GridItem key={code}>
                <Cards image={image} title={title} />
              </GridItem>
            );
          })
        )}
        {}
      </Grid>
    </section>
  );
};

export default Section3;
