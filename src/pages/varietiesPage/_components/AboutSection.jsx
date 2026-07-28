import VarietiesPlantBg from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantbg.png";
import VarietiesPlantBg2 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantBg2.png";

import VarietiesPlant1 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant1.png";
import VarietiesPlant2 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant2.png";
import VarietiesPlant3 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant3.png";

import ReusableSvg from "../../../components/ReusableSvg";
import ScrollReveal from "../../../components/ScrollReveal";
import FallingLeaves from "../../../components/FallingLeaves";

export default function AboutSection() {
  const varieties = [
    {
      title: "PANCHAMUKI BELPATRA",
      image: VarietiesPlant1,
      imageLeft: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      title: "TRAYODASHA-PATRA",
      image: VarietiesPlant2,
      imageLeft: false,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
    {
      title: "TRIPATRA",
      image: VarietiesPlant3,
      imageLeft: true,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit.",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      {varieties.map((item, index) => (
        <div
          key={index}
          className="relative w-full min-h-[500px] sm:min-h-[550px] md:min-h-[620px] lg:min-h-[680px] overflow-hidden flex flex-col justify-between"
        >
          <FallingLeaves count={12} />

          {/* Background */}
          <img
            src={index === 1 ? VarietiesPlantBg2 : VarietiesPlantBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />

          {/* Header Title + Divider */}
          <div className="relative z-20 w-full pt-8 sm:pt-12 md:pt-20 lg:pt-24 text-center">
            <h2 className="gradient-text font-secondary text-[22px] sm:text-[28px] md:text-[38px] lg:text-[48px] tracking-wide uppercase leading-none">
              {item.title}
            </h2>

            {/* Tight gap between title and vector line */}
            <div className="flex justify-center -mt-3 sm:-mt-4 md:-mt-5">
              <div className="w-[150px] sm:w-[180px] md:w-[220px] lg:w-[280px]">
                <ReusableSvg />
              </div>
            </div>
          </div>

          {/* Main Layout Area */}
          <div className="relative z-20 w-full max-w-[1400px] mx-auto px-4 sm:px-8 md:px-16 lg:px-24 flex-1 flex flex-col md:flex-row items-center justify-center pb-8 md:pb-12 gap-4 md:gap-0">
            
            {/* Mobile-Only Image (Centered above description) */}
            <div className="w-full flex justify-center items-center my-2 md:hidden">
              <img
                src={item.image}
                alt={item.title}
                className="w-[140px] sm:w-[180px] h-auto max-h-[220px] object-contain block mx-auto"
              />
            </div>

            {/* Description Box */}
            <div
              className={`w-full md:w-[50%] lg:w-[48%] flex items-center justify-center ${
                item.imageLeft
                  ? "md:ml-auto md:justify-start"
                  : "md:mr-auto md:justify-end"
              }`}
            >
              <div className="w-full max-w-[480px] lg:max-w-[560px]">
                <ScrollReveal
                  delay={0}
                  duration={0.5}
                  textClassName="font-primary text-[#D9A329] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] leading-[1.6] text-left"
                >
                  {item.description}
                </ScrollReveal>
              </div>
            </div>
          </div>

          {/* Desktop Plant Image (Edge aligned on Desktop) */}
          <div
            className={`hidden md:block absolute bottom-8 sm:bottom-10 md:bottom-14 lg:bottom-20 z-20 pointer-events-none ${
              item.imageLeft
                ? "left-0 sm:left-4 md:left-8 lg:left-12"
                : "right-0 sm:right-4 md:right-8 lg:right-12"
            }`}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-[220px] lg:w-[280px] xl:w-[320px] h-auto max-h-[420px] lg:max-h-[480px] object-contain block"
            />
          </div>

          {/* Mobile Bottom Divider Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9A329] z-30 md:hidden" />
        </div>
      ))}
    </section>
  );
}