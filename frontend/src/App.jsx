import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Advertisement from "./components/Advertisement";
import Carat from "./components/Carat";
import Collection from "./components/Collection";
import AboutUs from "./components/AboutUs";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Advertisement />} />
        <Route path="/carat" element={<Carat />} />
        <Route path="/collection" element={<Collection />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
    </Router>
  );
}

export default App;