import AboutBg from "../../../assets/images/HomePageImages/AboutImages/AboutBg.png"
import Plant from "../../../assets/images/HomePageImages/AboutImages/Plant.png"
import SideDesign from "../../../assets/images/HomePageImages/AboutImages/SideDesign.png"
import VectorDesign from "../../../assets/images/HomePageImages/AboutImages/VectorDesign.png"

export default function About() {
  return (
    <section
      className="relative w-full h-[800px] bg-cover bg-center bg-no-repeat overflow-hidden"
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
      <div className="relative z-20 max-w-7xl mx-auto h-full flex items-center justify-between px-20">

        {/* Left Plant */}
        <div className="w-1/2 flex justify-between">
          <img
            src={Plant}
            alt="Mahavilvam Plant"
            className="w-full h-full object-contain"
          />
        </div>

        {/* Right Content */}
        <div className="w-1/2 flex items-center justify-center gap-8">

          {/* Text */}
          <div className="max-w-[480px]">

            <p className="font-primary text-[#D9A329] text-[22px] leading-[48px] py-20 px-2 w-[425px] h-[325px] text-left lg:text-2xl">
              AIM HI a unit of SGL is one of the leading
              landscape company in Chennai with 28 years
              of expertise in various clientele handles
              executed spiritual park in Vellore and
              Tirupathi.
            </p>

            {/* Bottom Ornament */}
            <img
              src={VectorDesign}
              alt="Vector Design"
              className="w-[689px] mt-8 mx-auto"
            />
          </div>

          {/* Side Decoration */}
          <img
            src={SideDesign}
            alt="Side Design"
            className="h-[320px] w-auto"
          />

        </div>
      </div>
    </section>
  );
}
