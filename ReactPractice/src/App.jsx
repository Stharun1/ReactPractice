import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import UsestatePractice from "./Components/UsestatePractice/UsestatePractice";
import LoginCheck from "./Components/LoginCheck/LoginCheck";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/trains" element={<UsestatePractice />} />

          <Route path="/login" element={<LoginCheck />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
