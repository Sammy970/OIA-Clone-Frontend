import React from "react";
import Section1 from "./Sections/Section1";
import { Container } from "@chakra-ui/react";
import Section2 from "./Sections/Section2";

// Importing Auth0
import { useAuth0 } from "@auth0/auth0-react";

const Dashboard = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      {isAuthenticated ? (
        <Container maxW={"1010px"} mt={10}>
          <Section1 />
          <Section2 />
        </Container>
      ) : (
        <h1>Please Login</h1>
      )}
    </>
  );
};

export default Dashboard;
