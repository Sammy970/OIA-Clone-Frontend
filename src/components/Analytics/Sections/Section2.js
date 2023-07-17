import React, { useEffect, useState } from "react";
import AnalyticsCard from "../AnalyticsCard/AnalyticsCard";
import { Stack } from "@chakra-ui/react";

const Section2 = (props) => {
  const [apiData, setApiData] = useState("");
  const [apiCall, setApiCall] = useState(false);

  const code = props.code;

  useEffect(() => {
    const url = "https://oia-second-backend.vercel.app/api/analytics/clicks";
    // const url = "http://localhost:3001/api/analytics/clicks";
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

  return (
    <section>
      <Stack direction="row" justifyContent={"space-around"}>
        <AnalyticsCard clicks={apiData} onCall={apiRecall} />
      </Stack>
    </section>
  );
};

export default Section2;
