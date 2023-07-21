import React from "react";

import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import Section3 from "./Sections/Section3";
import Section4 from "./Sections/Section4";
import Footer from "./Footer/Footer";

const FrontPage = () => {
  return (
    <>
      <Section3 />
      <Section1 />
      <Section2 />
      <Section4 />
      <Footer />
    </>
  );
};

export default FrontPage;
