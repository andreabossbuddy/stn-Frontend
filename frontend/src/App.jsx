import { Link } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Import your pages/components
import Advertisement from "./frontend/Advertisement";
import Carat from "./frontend/Carat";
import Collection from "./frontend/Collection";
import AboutUs from "./frontend/AboutUs";

// Import global styles (if needed)
import "./index.css"; // not index.js — since this is for styling
import React from "@vitejs/plugin-react";

function App() {
   return (
    <Router>
      <nav className="p-4 bg-gray-200 flex gap-4">
        <Link to="/">Home</Link>
        <Link to="/carat">Carat</Link>
        <Link to="/collection">Collection</Link>
        <Link to="/about">About Us</Link>
      </nav>

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















































// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//     // redeploy trigger
//   )
// }

// export default App
