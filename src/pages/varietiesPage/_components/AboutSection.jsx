import VarietiesPlant1 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant1.png";
import VarietiesPlant2 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant2.png";
import VarietiesPlant3 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant3.png";

import ReusableSvg from "../../../components/ReusableSvg";
import ScrollReveal from "../../../components/ScrollReveal";
import FallingLeaves from "../../../components/FallingLeaves";

import CommonBg from "../../../assets/images/Common/CommonBg.png";

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
    <section className="relative w-full py-6 md:py-10 overflow-hidden">
      <FallingLeaves count={8} />

      {/* Background */}
      <img
        src={CommonBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {varieties.map((item, index) => (
        <div key={index} className="relative flex flex-col justify-center py-6">
          {/* Header */}
          <div className="relative z-20 text-center">
            <h2 className="gradient-text heading">{item.title}</h2>
            <ReusableSvg />
          </div>

          {/* Single Responsive Layout */}
          <div
            className={`container relative z-20 flex flex-col md:flex-row items-center justify-between gap-4 lg:gap-10 ${
              item.imageLeft ? "" : "md:flex-row-reverse"
            }`}
          >
            {/* Image */}
            <div className="w-full md:w-[40%] flex justify-center">
              <img
                src={item.image}
                alt={item.title}
                className="w-full max-w-50 lg:max-w-60 xl:max-w-70 2xl:max-w-100 h-auto object-contain"
              />
            </div>

            {/* Description */}
            <div className="w-full md:w-[60%]">
              <ScrollReveal
                delay={0}
                duration={0.5}
                textClassName={`description text-center ${item.imageLeft === true ? "md:text-left" : "md:text-right"}`}
              >
                {item.description}
              </ScrollReveal>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}
