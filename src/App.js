import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Map from "./Pages/Map";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Map />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
