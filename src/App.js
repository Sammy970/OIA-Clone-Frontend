import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Header/Navbar";
import { Routes, Route } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route
          path="/"
          element={
            <>
              <FrontPage />
            </>
          }
        />
        <Route
          path="/dashboard"
          element={
            <>
              <Dashboard />
            </>
          }
        />
      </Routes>
    </div>
  );
}

export default App;
