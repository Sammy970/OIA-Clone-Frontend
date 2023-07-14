import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Header/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
      </BrowserRouter>
    </div>
  );
}

export default App;
