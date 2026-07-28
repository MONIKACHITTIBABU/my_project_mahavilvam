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
    <section className="relative w-full overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center">
      {/* Background */}
      <img
        src={CommonBg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      {/* Falling Leaves Layer */}
      <FallingLeaves count={12} />

      {/* Main Content Container */}
      <div className="container relative z-20 flex flex-col md:flex-row items-center justify-between md:gap-8 lg:gap-12 xl:gap-20">
        {/* Left Plant GIF Container */}
        <div className="w-full h-auto md:max-w-[40%] lg:max-w-[35%]">
          <img
            src={AboutGif}
            src={AboutGif}
            alt="Mahavilvam Plant"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Content Block - Wrapped in relative container for precise side-design alignment */}
        <div className="relative w-full md:max-w-[60%] lg:max-w-[70%] flex items-center justify-between gap-2">
          {/* Main Text & Vector Divider Wrapper */}
          <div className="flex-1 text-center md:text-left flex flex-col items-center justify-center">
            {/* Description Text */}
            <ScrollReveal
              baseOpacity={baseOpacity}
              enableBlur={enableBlur}
              baseRotation={baseRotation}
              blurStrength={blurStrength}
              textClassName="!gradient-text about-description"
            >
              {description}
            </ScrollReveal>

            {/* Bottom Ornamental Vector (Width Slightly Increased) */}
            <div className="w-full flex justify-center">
              <div className="w-70 md:w-80 lg:w-108">
                <ReusableSvg />
              </div>
            </div>
          </div>

          {/* Vertical Side Design - Stretches top-to-bottom relative to content */}
          <div className="shrink-0 flex items-center justify-center h-full self-stretch py-1">
            <img
              src={SideDesign}
              alt="Side Design"
              className="h-full max-h-48 xs:max-h-56 sm:max-h-64 md:max-h-72 lg:max-h-80 xl:max-h-96 w-auto max-w-[16px] xs:max-w-[20px] sm:max-w-[28px] md:max-w-[36px] lg:max-w-[44px] object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
