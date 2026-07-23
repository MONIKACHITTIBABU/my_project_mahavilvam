import { Icon } from "@iconify/react";
import FooterBg from "../assets/images/Footer/FooterBg.png";

export default function Footer() {
  return (
    <section
      className="w-full py-10 sm:py-14 md:py-16 lg:py-20 bg-repeat"
      style={{
        backgroundImage: `url(${FooterBg})`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-[1100px] mx-auto bg-[#021A17] border-2 border-[#C89B3C] rounded-2xl lg:rounded-[24px] px-5 sm:px-8 lg:px-10 py-6 sm:py-8">

          {/* Top Row */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">

            {/* Left Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#C89B3C] flex items-center justify-center shrink-0">
              <Icon
                icon="mdi:phone-outline"
                className="text-white text-xl sm:text-2xl lg:text-3xl"
              />
            </div>

            {/* Heading */}
            <h2 className="text-[#D8A94A] text-center font-semibold uppercase
                           text-xl sm:text-2xl md:text-3xl lg:text-[32px]">
              BOOK YOUR DIVINE PLANT TODAY!
            </h2>

            {/* Right Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#C89B3C] flex items-center justify-center shrink-0">
              <Icon
                icon="mdi:sprout"
                className="text-white text-xl sm:text-2xl lg:text-3xl"
              />
            </div>

          </div>

          {/* Phone Number */}
          <h1 className="text-center text-white font-bold mt-6
                         text-3xl sm:text-4xl md:text-5xl lg:text-[64px] break-all">
            918939070940
          </h1>

          {/* Website */}
          <h3 className="text-center text-[#D8A94A] font-semibold mt-4
                         text-lg sm:text-xl md:text-2xl lg:text-[40px] break-words">
            www.Mahavilvam@Aimhi.com
          </h3>

        </div>
      </div>
    </section>
  );
}