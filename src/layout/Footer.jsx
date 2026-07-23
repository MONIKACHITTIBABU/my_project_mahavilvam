import { Icon } from "@iconify/react";
import FooterBg from "../assets/images/Footer/FooterBg.png"
export default function Footer() {
  return (
    <section
      className="w-full py-20 bg-repeat"
      style={{
        backgroundImage: `url(${FooterBg})`,
      }}
    >
      <div className="max-w-[1440px] mx-auto px-8">
        <div className="max-w-[1100px] mx-auto bg-[#021A17] border-2 border-[#C89B3C] rounded-[24px] px-10 py-8">

          {/* Top Row */}
          <div className="flex items-center justify-between">

            {/* Phone Icon */}
            <div className="w-16 h-16 rounded-full bg-[#C89B3C] flex items-center justify-center">
              <Icon
                icon="mdi:phone-outline"
                className="text-white text-3xl"
              />
            </div>

            {/* Heading */}
            <h2 className="text-[#D8A94A] text-[32px] font-semibold text-center">
              BOOK YOUR DIVINE PLANT TODAY!
            </h2>

            {/* Plant Icon */}
            <div className="w-16 h-16 rounded-full bg-[#C89B3C] flex items-center justify-center">
              <Icon
                icon="mdi:sprout"
                className="text-white text-3xl"
              />
            </div>

          </div>

          {/* Phone Number */}
          <h1 className="text-center text-white text-[64px] font-bold mt-6">
            918939070940
          </h1>

          {/* Website */}
          <h3 className="text-center text-[#D8A94A] text-[40px] font-semibold mt-4">
            www.Mahavilvam@Aimhi.com
          </h3>

        </div>
      </div>
    </section>
  );
}