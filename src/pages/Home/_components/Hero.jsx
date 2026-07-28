import HeroBg from "../../../assets/images/HomePageImages/HeroImages/HeroBg.png";
// import HeroMobileBg from "../../../assets/images/HomePageImages/HeroImages/HeroMobileBg.png";
import Design from "../../../assets/images/HomePageImages/HeroImages/Design.png";
import Lakshmi from "../../../assets/images/HomePageImages/HeroImages/Lakshmi.gif";
import Shivan from "../../../assets/images/HomePageImages/HeroImages/Shivan.gif";
import Hanging from "../../../assets/images/HomePageImages/HeroImages/Hanging.png";
import Hanging2 from "../../../assets/images/HomePageImages/HeroImages/Hanging2.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      {/* <img
        src={HeroMobileBg}
        alt="Hero Background Mobile"
        className="absolute inset-0 h-full w-full object-cover md:hidden"
      /> */}
      <img
        src={HeroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover
             object-top
             md:object-center"
      />
      {/* Hanging Decorations */}
      <div className="absolute inset-0 w-full h-full flex justify-between items-start">
        {/* Left Hanging */}
        <img
          src={Hanging}
          alt="Left Hanging"
          className="h-56 md:h-72 lg:h-80 xl:h-96 2xl:h-[40rem] w-auto object-cover event-pointer-none "
        />

        {/* Right Hanging */}
        <img
          src={Hanging2}
          alt="Right Hanging"
          className="h-56 md:h-72 lg:h-80 xl:h-96 2xl:h-[40rem] w-auto object-cover event-pointer-none "
        />
      </div>

      <div className="absolute inset-0 w-full h-full flex justify-between items-end">
        {/* Lakshmi GIF */}
        <img
          src={Lakshmi}
          alt="Lakshmi"
          className="z-10 pointer-events-none select-none object-cover w-full max-w-48 md:max-w-72 xl:max-w-96 2xl:max-w-[50rem]"
        />

        {/* Shiva GIF */}
        <img
          src={Shivan}
          alt="Shiva"
          className="z-10 pointer-events-none select-none object-cover w-full max-w-48 md:max-w-72 xl:max-w-96 2xl:max-w-[50rem]"
        />
      </div>

      {/* Content */}
      <div className="container relative z-30 flex pt-30 pb-44  flex-col items-center justify-center text-center">
        <div className="">
        {/* Mahavilvam */}
        <h2
          className="font-primary font-bold gradient-leaf text-[#D9A329]
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-[10rem]
    2xl:text-[8rem]
    leading-tight"
        >
          Mahavilvam
        </h2>

        {/* AIM HI */}
        <h3
          className=" font-primary font-semibold gradient-leaf text-[#D9A329]
    text-lg
    sm:text-2xl
    md:text-3xl
    lg:text-4xl
    xl:text-7xl"
        >
          @AIM HI
        </h3>

        </div>

        <div className="flex flex-col gap-3 mt-5">

        {/* Location */}
        <p
          className=" subheading gradient-text
    text-base
    sm:text-lg
    md:text-xl
    lg:text-2xl
    xl:text-3xl"
        >
          CHENNAI | VELLORE
        </p>

        {/* Divine Calling */}
        <h1
          className="font-bebas font-bold text-[#D9A329]
    text-4xl
    sm:text-5xl
    md:text-6xl
    lg:text-7xl
    xl:text-8xl
    2xl:text-[7rem]
    leading-none"
        >
          DIVINE CALLING
        </h1>
        </div>

        {/* Design */}
        <img
          src={Design}
          alt="Divine Calling"
          className="
      mt-2
      w-44
      sm:w-60
      md:w-72
      lg:w-80
      xl:w-[22rem]
      2xl:w-[26rem]
      h-auto
      object-contain
    "
        />

        {/* Bottom Content */}
        <div
          className="mt-4
    flex flex-row
    items-center
    justify-center
    gap-4
    md:gap-8
    lg:gap-10"
        >
          <h3
            className="font-primary font-semibold uppercase gold-gradient-text
      text-2xl
      sm:text-3xl
      md:text-4xl
      lg:text-5xl
      xl:text-8xl"
          >
            OWN YOUR
          </h3>

          <div className="flex flex-col items-center">
            <h1
              className="font-primary font-semibold gold-gradient-cc text-[#D9A329]
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        xl:text-4xl
        leading-tight"
            >
              MAHAVILVAM
              <span className="block">PROSPERITY</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}

//
