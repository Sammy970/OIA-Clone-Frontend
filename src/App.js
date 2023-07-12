import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Container } from "@chakra-ui/react";
import Section1 from "./components/Header/Sections/Section1";
import Section2 from "./components/Header/Sections/Section2";
import Section3 from "./components/Header/Sections/Section3";
import Section4 from "./components/Header/Sections/Section4";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section3 />

      <Container maxW={"2xl"}>
        <Section1 />
        <Section2 />
        <Section4 />
      </Container>
    </div>
  );
}

export default App;
