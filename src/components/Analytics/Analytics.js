import { Container } from "@chakra-ui/react";
import React from "react";
import { useLocation } from "react-router-dom";
import Section1 from "./Sections/Section1";
import Section2 from "./Sections/Section2";
import { useAuth0 } from "@auth0/auth0-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Error401 from "../ErrorPages/Error401";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";

const Analytics = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  let location = useLocation();

  let title, description, image, code;
  if (isAuthenticated) {
    const data = location.state.obj;
    title = data.title;
    description = data.description;
    image = data.image;
    code = data.code;
  }

  return (
    <>
      {isAuthenticated ? (
        <Container maxW={"1010px"} mt={10}>
          <Section1
            title={title}
            description={description}
            image={image}
            code={code}
          />
          <Section2 code={code} />

          <section></section>
        </Container>
      ) : isLoading || isAuthenticated ? (
        <Container maxW={"1010px"} mt={10}>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <FontAwesomeIcon icon={faSpinner} spin size="2xl" />
          </div>
        </Container>
      ) : (
        <Error401 />
      )}
    </>
  );
};

export default Analytics;
