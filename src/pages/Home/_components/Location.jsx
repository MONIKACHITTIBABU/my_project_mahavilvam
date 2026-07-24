import Location from "../../../assets/images/HomePageImages/LocationImages/Location.png";
import LocationBg from "../../../assets/images/HomePageImages/LocationImages/LocationBg.png";
import SideDesign from "../../../assets/images/HomePageImages/LocationImages/SideDesign.png";

export default function LocationsSection() {
  return (
    <section
      className="w-full py-10 sm:py-14 md:py-16 lg:py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${LocationBg})`,
      }}
    >
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12">

        {/* Chennai Card */}
        <div className="w-full max-w-[454px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

          {/* Card Header */}
          <div className="h-20 sm:h-24 lg:h-[110px] flex items-center justify-center border-b border-[#C89B3C]">
            <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-3xl sm:text-4xl font-semibold">
              CHENNAI
            </h2>
          </div>

          {/* Card Image */}
          <div className="relative">
            <img
              src={Location}
              alt="Chennai"
              className="w-full h-[250px] sm:h-[320px] md:h-[360px] lg:h-[435px] object-cover"
            />

            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#C89B3C]" />
          </div>
        </div>

        {/* Separator */}
        <img
          src={SideDesign}
          alt="Separator"
          className="hidden lg:block h-[320px] xl:h-[430px] object-contain"
        />

        {/* Vellore Card */}
        <div className="w-full max-w-[454px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

          {/* Card Header */}
          <div className="h-20 sm:h-24 lg:h-[110px] flex items-center justify-center border-b border-[#C89B3C]">
            <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-3xl sm:text-4xl font-semibold">
              VELLORE
            </h2>
          </div>

          {/* Card Image */}
          <div className="relative">
            <img
              src={Location}
              alt="Vellore"
              className="w-full h-[250px] sm:h-[320px] md:h-[360px] lg:h-[435px] object-cover"
            />

            {/* Center Vertical Line */}
            <div className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[2px] bg-[#C89B3C]" />
          </div>
        </div>

      </div>
    </section>
  );
}