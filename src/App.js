import "./App.css";
import Navbar from "./components/Header/Navbar";
import { Container } from "@chakra-ui/react";
import Section1 from "./components/Sections/Section1";
import Section2 from "./components/Sections/Section2";
import Section3 from "./components/Sections/Section3";
import Section4 from "./components/Sections/Section4";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Section3 />
      <Container maxW={"900px"}>
        <Section1 />
        <Section2 />
        <Section4 />
      </Container>
      <Footer />
    </div>
  );
}

export default App;
