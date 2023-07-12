import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Container } from "@chakra-ui/react";
import Section1 from "./components/Header/Sections/Section1";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Container maxW={"xl"}>
        <Section1 />
      </Container>
    </div>
  );
}

export default App;

