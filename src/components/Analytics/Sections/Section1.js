import React from "react";
import classes from "./Section1.module.css";
import DisplayCard from "../DisplayCard/DisplayCard";

const Section1 = (props) => {
  return (
    <section className={classes.section1}>
      <h3>
        Analysis for, <br />"{props.code}" <br />
      </h3>
      <DisplayCard
        image={props.image}
        title={props.title}
        description={props.description}
      />
    </section>
  );
};

export default Section1;
