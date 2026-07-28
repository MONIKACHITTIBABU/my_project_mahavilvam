import React from "react";
import { Icon } from "@iconify/react";
import { PiPlantFill } from "react-icons/pi";
import FooterBg from "../assets/images/Footer/FooterBg.png";
import FallingLeaves from "../components/FallingLeaves";

export default function Footer() {
  return (
    <footer
      className="relative w-full py-12 sm:py-16 md:py-20 lg:py-24 flex justify-center items-center px-3 sm:px-4 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{ backgroundImage: `url(${FooterBg})` }}
    >
      {/* Falling Leaves Animation Layer */}
      <FallingLeaves count={12} />

      {/* Outer Card Container */}
      <div className="relative z-10 w-full max-w-[95%] xs:max-w-md sm:max-w-xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl 2xl:max-w-6xl border-2 border-[#D9A329] rounded-2xl sm:rounded-3xl md:rounded-[2.5rem] bg-[#031312]/85 backdrop-blur-md p-5 xs:p-6 sm:p-10 md:p-12 lg:p-14 text-center shadow-2xl">
        
        {/* Container with Mobile Order Adjustment */}
        <div className="flex flex-col items-center justify-center w-full">
          
          {/* MOBILE (order-1) & DESKTOP (Top Bar): Icons section */}
          <div className="order-1 flex items-center justify-center gap-6 sm:gap-8 md:gap-0 md:justify-between w-full mb-3 sm:mb-4 md:mb-3">
            {/* Left Phone Icon */}
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 rounded-full bg-[#D9A329] flex items-center justify-center text-[#031312] shadow-xl shrink-0">
              <Icon icon="gg:phone" className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" />
            </div>

            {/* Desktop Headline */}
            <h3 className="hidden md:block font-primary font-bold tracking-wider text-[#D9A329] text-lg md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-4xl uppercase px-4">
              BOOK YOUR DIVINE PLANT TODAY!
            </h3>

            {/* Right Plant Icon */}
            <div className="w-12 h-12 xs:w-14 xs:h-14 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 2xl:w-32 2xl:h-32 rounded-full bg-[#D9A329] flex items-center justify-center text-[#031312] shadow-xl shrink-0">
              <PiPlantFill className="text-xl xs:text-2xl sm:text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl" />
            </div>
          </div>

          {/* MOBILE ONLY Headline */}
          <h3 className="order-2 md:hidden font-primary font-bold tracking-wide text-[#D9A329] text-xs xs:text-sm sm:text-lg my-2 uppercase">
            BOOK YOUR DIVINE PLANT TODAY!
          </h3>

          {/* Phone Number */}
          <div className="order-3 md:order-2 font-primary font-black tracking-normal xs:tracking-wider text-white text-[1.65rem] xs:text-3xl sm:text-5xl md:text-7xl xl:text-8xl 2xl:text-8xl my-2 xs:my-3 md:my-5 whitespace-nowrap">
            +91 79041 05103
          </div>

          {/* Website Link / Brand Text */}
          <span className="order-4 md:order-3 font-primary font-medium text-[#D9A329] text-xs xs:text-sm sm:text-lg md:text-5xl xl:text-6xl tracking-wide mt-1">
            Mahavilvam@AIM HI
          </span>

        </div>
      </div>
      </div>
      </div>
      </div>
    </section>
  );
}