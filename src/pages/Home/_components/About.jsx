import AboutBg from "../../../assets/images/HomePageImages/AboutImages/AboutBg.png";
import Plant from "../../../assets/images/HomePageImages/AboutImages/Plant.png";
import SideDesign from "../../../assets/images/HomePageImages/AboutImages/SideDesign.png";
import VectorDesign from "../../../assets/images/HomePageImages/AboutImages/VectorDesign.png";
import ScrollReveal from "../../../components/ScrollReveal";
export default function About({
  description,
  baseOpacity,
  enableBlur,
  baseRotation,
  blurStrength,
  textClassName,
}) {
  console.log({
  description,
  baseOpacity,
  enableBlur,
  baseRotation,
  blurStrength,
  textClassName,
});
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden py-10 md:py-16"
      style={{
        backgroundImage: `url(${AboutBg})`,
      }}
    >
      {/* Overlay (Optional) */}
      <div className="absolute inset-0 bg-black/10"></div>
      {/* Falling Leaves */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-10">
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

      {/* Content */}
      <div className="relative z-20 max-w-7xl mx-auto h-full flex flex-col lg:flex-row items-center justify-between px-5 sm:px-8 md:px-12 lg:px-20 gap-10 lg:gap-0">
        {/* Left Plant */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src={Plant}
            alt="Mahavilvam Plant"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-full lg:w-1/2 flex items-center justify-center gap-4 md:gap-8">
          {/* Text */}
          <div className="max-w-[480px] w-full text-center lg:text-left">
            <ScrollReveal
              baseOpacity={baseOpacity}
              enableBlur={enableBlur}
              baseRotation={baseRotation}
              blurStrength={blurStrength}
              textClassName={textClassName}
            >
              {description}
            </ScrollReveal>

            {/* Bottom Ornament */}
            <img
              src={VectorDesign}
              alt="Vector Design"
              className="w-full max-w-[689px] mt-6 md:mt-8 mx-auto lg:mx-0"
            />
          </div>

          {/* Side Decoration */}
          <img
            src={SideDesign}
            alt="Side Design"
            className="hidden md:block h-40 lg:h-64 xl:h-[320px] w-auto"
          />
        </div>
      </div>
    </section>
  );
}
