import React from "react";
import { Icon } from "@iconify/react";
import { PiPlantFill } from "react-icons/pi";
import FallingLeaves from "../components/FallingLeaves";
import CommonBg from "../assets/images/Common/CommonBg.png";

export default function Footer() {
  return (
    <footer className="relative w-full py-6 md:py-10 flex justify-center items-center overflow-hidden">
      <img
        src={CommonBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
        aria-hidden="true"
      />
      <FallingLeaves count={12} />

      <div className="relative w-full max-w-[90%] mx-auto xl:max-w-7xl z-10 border-2 border-[#D9A329] rounded-2xl bg-black p-3 md:p-4 lg:p-10 text-center">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Top icons — desktop only */}
          <div className="hidden md:flex items-center justify-between w-full mb-3 md:mb-0">
            <div className="md:p-3 lg:p-4 2xl:p-6 rounded-full bg-[#D9A329] flex items-center justify-center text-white shrink-0">
              <Icon icon="gg:phone" className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-6xl" />
            </div>

            <h3 className="footer-heading">
              BOOK YOUR DIVINE PLANT TODAY!
            </h3>

            <div className="md:p-3 lg:p-4 2xl:p-6 rounded-full bg-[#D9A329] flex items-center justify-center text-white shrink-0">
              <PiPlantFill className="text-2xl lg:text-4xl xl:text-5xl 2xl:text-5xl" />
            </div>
          </div>

          {/* Headline — mobile only */}
          <h3 className="md:hidden footer-heading ">
            BOOK YOUR DIVINE PLANT TODAY!
          </h3>

          {/* Phone number — icon on left for mobile only */}
          <div className="flex items-center justify-center gap-3 my-3">
            <div className="md:hidden p-2 rounded-full bg-[#D9A329] flex items-center justify-center text-white shrink-0">
              <Icon icon="gg:phone" className="text-xlsm:text-2xl" />
            </div>
            <div className="footer-phone-number">
              +91 79041 05103
            </div>
          </div>

          <span className="footer-email md:mt-1">
            Mahavilvam@AIM HI
          </span>
        </div>
      </div>
    </footer>
  );
}
