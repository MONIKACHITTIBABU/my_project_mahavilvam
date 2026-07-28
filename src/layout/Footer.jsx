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

      <div className="relative container z-10 border-2 border-[#D9A329] rounded-2xl bg-black p-2 md:p-4 lg:p-6 text-center">
        <div className="flex flex-col items-center justify-center w-full">
          {/* Top icons — desktop only */}
          <div className="hidden md:flex items-center justify-between w-full mb-3">
            <div className="w-16 h-16 lg:w-18 lg:h-18 2xl:w-20 2xl:h-20 rounded-full bg-[#D9A329] flex items-center justify-center text-[#031312] shadow-xl shrink-0">
              <Icon icon="gg:phone" className="text-3xl lg:text-4xl 2xl:text-5xl" />
            </div>

            <h3 className="font-primary font-bold tracking-wider text-[#D9A329] text-2xl lg:text-3xl xl:text-4xl uppercase px-4">
              BOOK YOUR DIVINE PLANT TODAY!
            </h3>

            <div className="w-16 h-16 lg:w-18 lg:h-18 2xl:w-20 2xl:h-20 rounded-full bg-[#D9A329] flex items-center justify-center text-[#031312] shadow-xl shrink-0">
              <PiPlantFill className="text-3xl lg:text-4xl 2xl:text-5xl" />
            </div>
          </div>

          {/* Headline — mobile only */}
          <h3 className="md:hidden font-primary font-bold tracking-wide text-[#D9A329] text-lg sm:text-xl my-2 uppercase">
            BOOK YOUR DIVINE PLANT TODAY!
          </h3>

          {/* Phone number — icon on left for mobile only */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 my-2 xs:my-3 md:my-5">
            <div className="md:hidden w-10 h-10 xs:w-12 xs:h-12 sm:w-14 sm:h-14 rounded-full bg-[#D9A329] flex items-center justify-center text-[#031312] shadow-xl shrink-0">
              <Icon icon="gg:phone" className="text-lg xs:text-xl sm:text-2xl" />
            </div>
            <div className="font-primary font-black tracking-normal xs:tracking-wider text-white text-3xl sm:text-5xl md:text-7xl xl:text-8xl whitespace-nowrap">
              +91 79041 05103
            </div>
          </div>

          <span className="font-primary font-medium text-[#D9A329] text-2xl sm:text-lg md:text-5xl xl:text-6xl tracking-wide mt-1">
            Mahavilvam@AIM HI
          </span>
        </div>
      </div>
    </footer>
  );
}
