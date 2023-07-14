import React from "react";
import classes from "./Error401.module.css";
import myGif from "./Error401GIF.gif";

const Error401 = () => {
  return (
    <section className={classes.section1}>
      <img src={myGif} alt="" width={350}/>
    </section>
  );
};

export default Error401;
