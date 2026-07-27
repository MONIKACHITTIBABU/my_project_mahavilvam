import React from "react";
import Header from "../../layout/Header";
import Hero from "./_components/Hero";
import About from "./_components/About";
import Benefits from "./_components/Benefits";
import Location from "./_components/Location";
import Purpose from "./_components/Purpose";
import Footer from "../../layout/Footer";


export default function Home() {
  return (
    <div>
      <Header />
      <Hero />
      <About
        description="AIM HI  a unit of SGL is one of the leading landscape company in chennai with 28 years of expertise servicing diverse clientele having executed large scale spiritual park in Vellore and Tirupati"
        baseOpacity={0.1}
        enableBlur={true}
        baseRotation={3}
        blurStrength={4}
        textClassName="text-[#FFDE37] text-lg lg:text-4xl leading-10"
      />
      <Benefits />
      <Location />
      <Purpose />
      <Footer />
    </div>
  );
}
