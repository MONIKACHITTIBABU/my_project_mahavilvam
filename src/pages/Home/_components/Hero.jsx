import HeroBg from "../../../assets/images/HomePageImages/HeroImages/HeroBg.png";
import Design from "../../../assets/images/HomePageImages/HeroImages/Design.png";
import LakshmiDesktop from "../../../assets/images/HomePageImages/HeroImages/LakshmiDesktop.png";
import ShivaDesktop from "../../../assets/images/HomePageImages/HeroImages/ShivanDesktop.png";
import Hanging from "../../../assets/images/HomePageImages/HeroImages/Hanging.png";
import LakshmiMobile from "../../../assets/images/HomePageImages/HeroImages/LakshmiMobile.png";
import ShivaMobile from "../../../assets/images/HomePageImages/HeroImages/ShivaMobile.png";

export default function Hero() {
  return (
    <section className="relative w-full min-h-[calc(100vh-8vh)] md:min-h-auto flex item-center overflow-hidden">
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
        <picture>
          <source media="(min-width: 1024px)" srcSet={LakshmiDesktop} />
          <source media="(max-width: 767px)" srcSet={LakshmiMobile} />

          <img
            src={LakshmiDesktop}
            alt="Lakshmi"
            className="-mb-4 z-10 pointer-events-none select-none object-cover w-full md:max-w-52 lg:max-w-70 xl:max-w-96"
          />
        </picture>

        {/* Shiva GIF */}
        <picture>
          <source media="(min-width: 1024px)" srcSet={ShivaDesktop} />
          <source media="(max-width: 767px)" srcSet={ShivaMobile} />
          <img
            src={ShivaDesktop}
            alt="Shiva"
            className="z-10 pointer-events-none select-none object-cover w-full md:max-w-52 lg:max-w-70 xl:max-w-96"
          />
        </picture>
      </div>

      {/* Content */}
      <div className="container relative z-30 flex mt-10 md:mt-20 md:pb-3 flex-col items-center justify-center text-center">
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
          className="mt-2 w-full max-w-40 md:max-w-52 lg:max-w-60 2xl:max-w-96 h-auto object-cover"
        />

        {/* Bottom Content */}
        <div className="my-4 xl:my-10 flex flex-row items-center justify-center gap-4">
          <h3 className="hero-heading-5 gold-gradient-text">OWN YOUR</h3>

          <div className="flex flex-col items-center">
            <h1 className="hero-heading-6 gold-gradient-cc">
              MAHAVILVAM
              <span className="block gold-gradient-cc">PROSPERITY</span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
