import React from "react";
import classes from "./Section2.module.css";
import Cards from "../../UI/Cards";

const Section2 = () => {
  return (
    <section className={classes.section2}>
      <h2>Links:</h2>
      <Cards />
      <br />
      <Cards />
      <br />
      <Cards />
    </section>
  );
};

export default Section2;
