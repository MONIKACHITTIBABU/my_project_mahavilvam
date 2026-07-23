import React from "react";
import Header from "../../layout/Header";
import LocationHero from "./LocationHero";
import AboutLocation from "./AboutLocation";

export default function LocationPage() {
  return (
    <div>
      <Header />
      <LocationHero/>
      <AboutLocation/>
    </div>
  );
}