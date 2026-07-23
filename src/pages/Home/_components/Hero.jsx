import HeroBg from "../../../assets/images/HomePageImages/HeroImages/HeroBg.png"
import Design from "../../../assets/images/HomePageImages/HeroImages/Design.png"

export default function Hero() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <img
        src={HeroBg}
        alt="Hero Background"
        className="absolute inset-0 h-full w-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <h2 className="text-4xl font-bold font-primary text-[#D9A329] lg:text-[104px] lg:text-6xl">
          Mahavilvam
        </h2>

        <h3 className="mt-2 text-2xl font-semibold font-primary text-[#D9A329] lg:text-4xl">
          @AIM HI
        </h3>

        <p className="mt-3 tracking-[5px] font-secondary text-[#E8C875]">
          CHENNAI | VELLORE
        </p>
        <h1 className="text-4xl font-bold font-bebas text-[#D9A329] lg:text-[104px] lg:text-6xl">
                  DIVINE CALLING
        </h1>
        {/* Divine Calling Image */}
        <img
          src={Design}
          alt="Divine Calling"
          className="mt-4 w-[349px] h-[56px] mx-auto object-contain"
        />

        <div className="mt-8 flex flex-col md:flex-row items-center justify-center">
          <h3 className="text-3xl lg:text-8xl font-semibold font-primary uppercase text-[#E8C875] lg:text-4xl">
            OWN YOUR
          </h3>

          <div className="flex flex-col items-center justify-center gap-3">
      

            <h1 className="text-xl text-[#D9A329] font-primary lg:text-4xl pl-4">
              MAHAVILVAM
              <span className="block">
              PROSPERITY
              </span>
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}