import classes from "./App.module.css";
import Analytics from "./components/Analytics/Analytics";
import Dashboard from "./components/Dashboard/Dashboard";
import FrontPage from "./components/FrontPage";
import Navbar from "./components/Header/Navbar";
import { Routes, Route, BrowserRouter } from "react-router-dom";

function App() {
  return (
    <div className={classes.App}>
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
          <Route
            path="/dashboard/analytics"
            element={
              <>
                <Analytics />
              </>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
