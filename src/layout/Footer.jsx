import { Icon } from "@iconify/react";
import FooterBg from "../assets/images/Footer/FooterBg.png";
import FallingLeaves from "../components/FallingLeaves"; // Import component

export default function Footer() {
  return (
    <section
      className="relative w-full py-6 md:py-10 overflow-hidden"
      style={{
        backgroundImage: `url(${FooterBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">

        {/* Mobile outside margin */}
        <div className="mx-5 md:mx-0">

          <div className="bg-[#021A17] border-2 border-[#C89B3C] rounded-2xl lg:rounded-[24px] px-5 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8">

            {/* ================= MOBILE ================= */}
            <div className="md:hidden flex flex-col items-center">

              {/* Plant Icon + Heading */}
              <div className="flex items-start gap-3">

                {/* Plant Icon */}
                <div className="w-10 h-10 rounded-full bg-[#C89B3C] flex items-center justify-center flex-shrink-0 mt-1">
                  <Icon
                    icon="mdi:sprout"
                    className="text-white text-xl"
                  />
                </div>

                {/* Heading */}
                <div>
                  <h2 className="text-[#D9A52B] font-outfit font-semibold uppercase text-xl leading-tight">
                    BOOK YOUR DIVINE
                  </h2>

                  <h2 className="text-[#D9A52B] font-outfit font-semibold uppercase text-xl leading-tight">
                    PLANT TODAY!
                  </h2>
                </div>

              </div>

              {/* Phone Number */}
              <div className="flex items-center gap-3 mt-6">

                {/* Phone Icon */}
                <div className="w-10 h-10 rounded-full bg-[#C89B3C] flex items-center justify-center">
                  <Icon
                    icon="gg:phone"
                    className="text-white text-xl"
                  />
                </div>

                <h1 className="text-white font-primary text-2xl font-medium">
                  +91 7904105103
                </h1>

              </div>

              {/* Website */}
              <h3 className="mt-5 text-center text-[#D9A52B] font-primary text-2xl font-semibold">
                Mahavilvam@Aimhi
              </h3>

            </div>

            {/* ================= TABLET & DESKTOP ================= */}
            <div className="hidden md:block">

              {/* Top Row */}
              <div className="flex items-center justify-between gap-6">

                {/* Phone Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#C89B3C] flex items-center justify-center">
                  <Icon
                    icon="gg:phone"
                    className="text-white text-5xl"
                  />
                </div>

                {/* Heading */}
                <h2 className="subheading gradient-text !font-outfit text-center">
                  BOOK YOUR DIVINE PLANT TODAY!
                </h2>

                {/* Plant Icon */}
                <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 rounded-full bg-[#C89B3C] flex items-center justify-center">
                  <Icon
                    icon="mdi:sprout"
                    className="text-white text-5xl"
                  />
                </div>

          {/* Website */}
          <h3 className="text-center gold-gradient-text !font-primary subheading !text-6xl">
            Mahavilvam@hi
          </h3>

        </div>
      </div>
    </section>
  );
}