import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { ChakraProvider } from "@chakra-ui/react";
import { Auth0Provider } from "@auth0/auth0-react";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Auth0Provider
    domain="samyak970.us.auth0.com"
    clientId="G5bpyz0NthU8LMwd2ACipuHSJ0EeuEVv"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <ChakraProvider>
      <App />
    </ChakraProvider>
  </Auth0Provider>
);
