import LocationBg from "../../assets/images/LocationImages/LocationHeroImages/LocationBg.png";
export default function LocationHero() {
  return (
    <section
      className="relative w-full h-[600px] bg-center bg-cover bg-no-repeat flex items-center justify-center"
      style={{
        backgroundImage: `url(${LocationBg})`,
      }}
    >
      {/* Dark Overlay (Optional) */}
      <div className="absolute inset-0 bg-black/10"></div>

      {/* Title */}
      <div className="relative z-10 font-primary text-center justify-center">
        <h1 className="text-[#E7B64B] font-primary font-bold uppercase leading-tight">
          <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-[110px]">
            OUR
          </span>

          <span className="block text-6xl md:text-7xl lg:text-8xl xl:text-[110px] mt-2">
            LOCATIONS
          </span>
        </h1>
      </div>
    </section>
  );
}