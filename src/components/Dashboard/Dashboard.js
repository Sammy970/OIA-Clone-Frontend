import React from "react";
import Section1 from "./Sections/Section1";
import { Container } from "@chakra-ui/react";
import Section2 from "./Sections/Section2";


const Dashboard = () => {
  return (
    <>
      <Container maxW={"1010px"} mt={10}>
        <Section1 />
        <Section2 />
      </Container>
    </>
  );
};

export default Dashboard;
