import AboutBg from "../../../assets/images/HomePageImages/AboutImages/AboutBg.png";
import Plant from "../../../assets/images/HomePageImages/AboutImages/Plant.png";
import SideDesign from "../../../assets/images/HomePageImages/AboutImages/SideDesign.png";

import ScrollReveal from "../../../components/ScrollReveal";
import ReusableSvg from "../../../components/ReusableSvg";

export default function About({
  description,
  baseOpacity,
  enableBlur,
  baseRotation,
  blurStrength,
}) {
  return (
    <section className="relative w-full min-h-screen overflow-hidden py-10 md:py-16 xl:py-20">
      {/* Background */}
      <img
        src={AboutBg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/10" />

      {/* Falling Leaves */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden z-10">
        {Array.from({ length: 30 }).map((_, index) => (
          <span
            key={index}
            className="leaf"
            style={{
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
              animationDuration: `${5 + Math.random() * 5}s`,
              transform: `scale(${0.6 + Math.random() * 0.8})`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-20 mx-auto flex max-w-[1800px] flex-col items-center justify-between px-6 sm:px-8 md:px-12 lg:flex-row lg:px-14 xl:px-20 2xl:px-28">

        {/* Plant */}
        <div className="flex w-full justify-center lg:w-[45%] lg:justify-start">
          <img
            src={Plant}
            alt="Mahavilvam Plant"
            className="h-auto w-full max-w-[340px] object-contain sm:max-w-[420px] md:max-w-[500px] lg:max-w-[560px] xl:max-w-[650px] 2xl:max-w-[760px]"
          />
        </div>

        {/* Right Section */}
        <div className="mt-10 flex w-full items-center justify-between gap-6 lg:mt-0 lg:w-[55%] xl:gap-10">

          {/* Description */}
          <div className="flex-1 w-full max-w-[700px]">
            <ScrollReveal
              baseOpacity={baseOpacity}
              enableBlur={enableBlur}
              baseRotation={baseRotation}
              blurStrength={blurStrength}
              textClassName="gradient-text font-primary description leading-relaxed"
            >
              {description}
            </ScrollReveal>

            <div className="mt-8">
              <ReusableSvg />
            </div>
          </div>

          {/* Side Design */}
          <div className="hidden md:flex flex-shrink-0 items-center justify-center">
            <img
              src={SideDesign}
              alt="Side Design"
              className="h-56 w-auto object-contain lg:h-72 xl:h-80 2xl:h-96"
            />
          </div>

        </div>
      </div>
    </section>
  );
}