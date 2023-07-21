import React, { useEffect, useState } from "react";
import classes from "./Section3.module.css";
import Cards from "../../UI/Cards/Cards";
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
    // const url = "http://localhost:3001/api/fetchUserLinks";
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
        templateColumns={{
          base: "1fr",
          md: "repeat(2, 1fr)",
          lg: "repeat(2, 1fr)",
          xl: "repeat(3, 1fr)",
        }}
        align={"center"}
        gap={7}
      >
        {apiData.length === 0 ? (
          <GridItem colSpan={3}>
            <p className={classes.noDataFound}>No data found</p>
          </GridItem>
        ) : (
          apiData.map((data) => {
            // console.log(data);
            const code = Object.keys(data).toString();
            const image = data[code].ogMetadata["og:image"];
            const title = data[code].ogMetadata["og:title"];
            const description = data[code].ogMetadata["og:description"];
            const ogLink = data[code].link;
            const link = `https://oia.vercel.app/${code}`;
            return (
              <GridItem key={code}>
                <Cards
                  image={image}
                  title={title}
                  description={description}
                  link={link}
                  ogLink={ogLink}
                  code={code}
                  data={data}
                />
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
