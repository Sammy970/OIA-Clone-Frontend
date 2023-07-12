import React from "react";
import classes from "./Section1.module.css";

const Section1 = () => {
  return (
    <section className={classes.section1}>
      <h3>Your Shortcut to Easy Sharing and Snappy URLs!</h3>
      <p>
        Give personality to your{" "}
        <span style={{ textDecoration: "underline" }}>links</span> and{" "}
        <span style={{ textDecoration: "underline" }}>control</span> how they
        are seen.
      </p>
    </section>
  );
};

export default Section1;
