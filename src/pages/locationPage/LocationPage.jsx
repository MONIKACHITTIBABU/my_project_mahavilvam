import React from "react";
import Header from "../../layout/Header";
import LocationAbout from "./_components/LocationAbout";
import ReusableHeroSection from "../../components/ReusableHeroSection";
import Footer from "../../layout/Footer";

export default function LocationPage() {
  return (
    <>
      <ReusableHeroSection title1="Our" title2="Locations " />
      <LocationAbout />
      <Footer />
    </>
  );
}