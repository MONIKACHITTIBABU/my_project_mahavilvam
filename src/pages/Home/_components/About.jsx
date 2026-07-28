import CommonBg from "../../../assets/images/Common/CommonBg.png";
import AboutGif from "../../../assets/images/Gif/AboutGif.gif";
import SideDesign from "../../../assets/images/HomePageImages/AboutImages/SideDesign.png";

import ScrollReveal from "../../../components/ScrollReveal";
import ReusableSvg from "../../../components/ReusableSvg";
import FallingLeaves from "../../../components/FallingLeaves";

export default function About({
  description,
  baseOpacity,
  enableBlur,
  baseRotation,
  blurStrength,
}) {
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden py-6 md:py-10"
    >
      {/* Background */}
      <img
        src={CommonBg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      {/* Falling Leaves Layer */}
      <FallingLeaves count={12} />

      {/* Content */}
      <div className="container relative z-20 flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Left Plant */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src={AboutGif}
            alt="Mahavilvam Plant"
            className="w-full lg:w-[80%] h-auto object-cover -translate-y-4 md:-translate-y-10 lg:-translate-y-36"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[60%] flex items-center justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8">

          {/* Text */}
          <div className="w-full text-center description lg:text-left">
            <ScrollReveal
              baseOpacity={baseOpacity}
              enableBlur={enableBlur}
              baseRotation={baseRotation}
              blurStrength={blurStrength}
              textClassName="!gradient-text font-primary leading-relaxed xl:text-3xl"
            >
              {description}
            </ScrollReveal>

            <ReusableSvg />
          </div>

          {/* Side Design */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center">
            {/* Vector design if needed */}
          </div>

          <img
            src={SideDesign}
            alt="Side Design"
            className="h-[150px] sm:h-[180px] md:h-[210px] lg:h-[250px] xl:h-[290px] 2xl:h-[330px] w-auto -translate-y-2 sm:-translate-y-4 md:-translate-y-6 lg:-translate-y-8"
          />
        </div>
      </div>
    </section>
  );
}