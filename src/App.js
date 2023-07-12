import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Container } from "@chakra-ui/react";
import Section1 from "./components/Header/Sections/Section1";
import Section2 from "./components/Header/Sections/Section2";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxW={"2xl"}>
        <Section1 />
        <Section2 />
      </Container>
    </div>
  );
}

export default App;
