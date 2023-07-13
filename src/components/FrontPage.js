import React from "react";

import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Footer from "./Footer/Footer";
import { Container } from "@chakra-ui/react";

const FrontPage = () => {
  return (
    <>
      <Section3 />
      <Container maxW={"900px"}>
        <Section1 />
        <Section2 />
        <Section4 />
      </Container>
      <Footer />
    </>
  );
};

export default FrontPage;
