import React from "react";
import LocationAbout from "./_components/LocationAbout";
import ReusableHeroSection from "../../components/ReusableHeroSection";

export default function LocationPage() {
  return (
    <>
      <ReusableHeroSection title1="Our" title2="Locations " />
      <LocationAbout />
    </>
  );
}