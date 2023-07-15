import React, { useState, useEffect } from "react";
import classes from "./Section1.module.css";
import { useAuth0 } from "@auth0/auth0-react";

const Section1 = () => {
  const { user } = useAuth0();

  let name;
  if (user) {
    name = user.name;
  } else {
    name = "Buddy";
  }

  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getGreeting = () => {
    const currentHour = time.getHours();

    if (currentHour < 12) {
      return "Good Morning";
    } else if (currentHour < 18) {
      return "Good Afternoon";
    } else {
      return "Good Evening";
    }
  };

  const greet = getGreeting();

  // console.log(name);

  return (
    <section className={classes.section1}>
      <h3>
        {greet}, <br />
        {name}
      </h3>
    </section>
  );
};

export default Section1;
