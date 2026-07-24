import HeroBg from "../../../assets/images/HomePageImages/HeroImages/HeroBg.png";
import Design from "../../../assets/images/HomePageImages/HeroImages/Design.png";

export default function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroBg}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex min-h-screen flex-col items-center justify-center px-5 sm:px-8 md:px-12 lg:px-16 text-center">
        <h2
          className="font-primary font-bold gradient-leaf text-[#D9A329] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[104px]"
        >
          Mahavilvam
        </h2>

        <h3 className="mt-2 font-primary font-semibold gradient-leaf text-[#D9A329] text-xl sm:text-2xl md:text-3xl lg:text-4xl">
          @AIM HI
        </h3>

        <p className="subheading gradient-text mt-6">
          CHENNAI | VELLORE
        </p>
        <h1 className="font-bebas mt-6 font-bold text-[#D9A329] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[104px]">
          DIVINE CALLING
        </h1>
        {/* Divine Calling Image */}
        <img
          src={Design}
          alt="Divine Calling"
          className="mt-4 w-52 sm:w-72 md:w-80 lg:w-[349px] h-auto mx-auto object-contain"/>

        <div className="mt-6 md:mt-8 flex flex-col md:flex-row items-center justify-center gap-3 md:gap-5">
          <h3 className="font-primary font-semibold uppercase gold-gradient-text text-2xl sm:text-3xl md:text-5xl lg:text-6xl xl:text-7xl mt-8">
            OWN YOUR
          </h3>

          <div className="flex flex-col items-center justify-center gap-3">
            <h1 className="font-primary font-semibold gold-gradient-cc text-[#D9A329] text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl pl-0 md:pl-4 mt-6">
              MAHAVILVAM
              <span className="block">PROSPERITY</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
