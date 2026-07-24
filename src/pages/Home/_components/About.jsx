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
  return (
    <section
      className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden py-6 md:py-10 "
      style={{
        backgroundImage: `url(${AboutBg})`,
      }}
    >
      {/* Overlay */}
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
      <div className="container relative z-20  flex flex-col md:flex-row items-center justify-between  gap-10 md:gap-14 lg:gap-10">

        {/* Left Plant */}
        <div className="w-full md:w-[40%] flex justify-center">
          <img
            src={Plant}
            alt="Mahavilvam Plant"
            className="w-full lg:w-[80%] h-auto object-cover"
          />
        </div>

        {/* Right Content */}
        <div className="w-full md:w-[60%] flex items-center justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8">

          {/* Text */}
          <div className="w-full text-center lg:text-left">

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
              className="w-[80%] sm:w-[75%] md:w-[70%] lg:w-full max-w-[689px] mt-6 md:mt-8 mx-auto lg:mx-0"
            />
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