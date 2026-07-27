import React from "react";
import Home from "./pages/Home/Home";
import Varieties from "./pages/varietiesPage/VarietiesPage.jsx";
import { Route, Routes } from "react-router-dom";
import LocationPage from "./pages/locationPage/LocationPage.jsx";
import WhatsAppButton from "./components/WhatsAppButton.jsx";

export default function App() {
  return (
    <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/locations" element={<LocationPage />} />
          <Route path="/varieties" element={<Varieties />} />
        </Routes>
        <WhatsAppButton/>
    </>
  );
}