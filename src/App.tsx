import { useState, useEffect } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Welcome from "./components/Welcome";
import AllPageInHome from "./components/AllPageInHome";
import "./App.css";
function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcome(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, [showWelcome]);

  return (
    <Routes>
      <Route path="/FirstPage" element={<AllPageInHome />} />
      <Route
        path="/"
        element={
          showWelcome ? <Welcome /> : <Navigate to="/FirstPage" replace />
        }
      />
    </Routes>
  );
}

export default App;
