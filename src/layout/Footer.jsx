import { Icon } from "@iconify/react";
import FooterBg from "../assets/images/Footer/FooterBg.png"
export default function Footer() {
  return (
    <section
      className="w-full py-6 md:py-10"
      style={{
        backgroundImage: `url(${FooterBg})`,
      }}
    >
      <div className="container">
        <div className="bg-[#021A17] border-2 border-[#C89B3C] rounded-2xl lg:rounded-[24px] px-5 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">

          {/* Top Row */}
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4">

            {/* Phone Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#C89B3C] flex items-center justify-center flex-shrink-0">
              <Icon
                icon="gg:phone"
                className="text-white text-5xl"
              />
            </div>

            {/* Heading */}
            <h2 className=" text-[#D8A94A] font-outfit font-semibold text-center leading-tight text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl px-2">
              BOOK YOUR DIVINE PLANT TODAY!
            </h2>

            {/* Plant Icon */}
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#C89B3C] flex items-center justify-center flex-shrink-0">
              <Icon
                icon="mdi:sprout"
                className="text-white text-5xl"
              />
            </div>

          </div>

          {/* Phone Number */}
          <h1 className="text-center text-white font-primary font-bold mt-5 md:mt-6 text-3xl sm:text-2xl md:text-3xl lg:text-6xl break-all">
            918939070940
          </h1>

          {/* Website */}
          <h3 className="text-center text-[#D8A94A] font-primary font-semibold mt-3 md:mt-4 text-MD sm:text-xl md:text-2xl lg:text-4xl break-all">
            www.Mahavilvam@Aimhi.com
          </h3>

        </div>
      </div>
    </section>
  );
}