import HeroBg from "../../../assets/images/HomePageImages/HeroImages/HeroBg.png";
import Design from "../../../assets/images/HomePageImages/HeroImages/Design.png";
import Lakshmi from "../../../assets/images/HomePageImages/HeroImages/Lakshmi.gif";
import Shivan from "../../../assets/images/HomePageImages/HeroImages/Shivan.gif";
import Hanging from "../../../assets/images/HomePageImages/HeroImages/Hanging.png";

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroBg}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover object-top md:object-center"
      />
      {/* Hanging Decorations */}
      <div className="absolute inset-0 w-full h-full flex justify-between items-start">
        {/* Left Hanging */}
        <img
          src={Hanging}
          alt="Left Hanging"
          className="h-56 md:h-72 lg:h-80 xl:h-96 2xl:max-w-[35%] w-auto object-cover event-pointer-none "
        />

        {/* Right Hanging */}
        <img
          src={Hanging}
          alt="Right Hanging"
          className="h-56 md:h-72 lg:h-80 xl:h-96 2xl:max-w-[35%] rotate-y-180 w-auto object-cover event-pointer-none "
        />
      </div>

      <div className="absolute inset-0 w-full h-full flex justify-between items-end">
        {/* Lakshmi GIF */}
        <img
          src={Lakshmi}
          alt="Lakshmi"
          className="z-10 pointer-events-none select-none object-cover w-full max-w-48 md:max-w-72 xl:max-w-96 2xl:max-w-[30%]"
        />

        {/* Shiva GIF */}
        <img
          src={Shivan}
          alt="Shiva"
          className="z-10 pointer-events-none select-none object-cover w-full max-w-48 md:max-w-72 xl:max-w-96 2xl:max-w-[30%]"
        />
      </div>

      {/* Content */}
      <div className="container relative z-30 flex pt-30 pb-44 md:pb-3  flex-col items-center justify-center text-center">
        <div className="">
          {/* Mahavilvam */}
          <h2 className="hero-heading-1 gradient-leaf">Mahavilvam</h2>

          {/* AIM HI */}
          <h3 className="hero-heading-2 gradient-leaf">@AIM HI</h3>
        </div>

        <div className="flex flex-col gap-4 mt-5">
          {/* Location */}
          <p className="hero-heading-3 gold-gradient-text">CHENNAI | VELLORE</p>

          {/* Divine Calling */}
          <h1 className="hero-heading-4 gold-gradient-text">DIVINE CALLING</h1>
        </div>

        {/* Design */}
        <img
          src={Design}
          alt="Divine Calling"
          className=" mt-2 w-full max-w-40 lg:max-w-80 2xl:max-w-96 h-auto object-cover
    "
        />

        {/* Bottom Content */}
        <div className="my-4 xl:my-10 flex flex-row items-center justify-center gap-4 md:gap-8 lg:gap-4">
          <h3 className="font-primary font-semibold uppercase gold-gradient-text  text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-8xl">
            OWN YOUR
          </h3>

          <div className="flex flex-col items-center">
            <h1 className="font-primary font-semibold gold-gradient-cc text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-4xl leading-tight">
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
