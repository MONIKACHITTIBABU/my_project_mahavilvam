import Location from "../../../assets/images/HomePageImages/LocationImages/Location.png"
import LocationBg from "../../../assets/images/HomePageImages/LocationImages/LocationBg.png"
import SideDesign from "../../../assets/images/HomePageImages/LocationImages/SideDesign.png"

export default function LocationsSection() {
  return (
    <section
      className="w-full py-20 bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url(${LocationBg})`,
      }}
    >
      <div className="max-w-[1440px] mx-auto flex justify-center items-center gap-10">

        {/* Chennai Card */}
        <div className="w-[454px] h-[545px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

  {/* Card Header */}
         <div className="h-[110px] flex items-center justify-center border-b-2 border-[#C89B3C]">
             <h2 className="text-[#D8A94A] font-secondary text-4xl font-semibold">
                  CHENNAI
            </h2>
          </div>

  {/* Card Image */}

          <img
            src={Location}
            alt="Chennai"
            className="w-full  object-cover"
          />
        </div>

        {/* Separator */}
        <img
          src={SideDesign}
          alt="Separator"
          className="h-[400px] object-contain"
        />

        {/* Vellore Card */}
         <div className="w-[454px] h-[545px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

  {/* Card Header */}
         <div className="h-[110px] flex items-center justify-center border-b-2 border-[#C89B3C]">
            <h2 className="text-[#D8A94A] text-4xl font-secondary font-semibold">
              VELLORE
            </h2>
          </div>

          <img
            src={Location}
            alt="Vellore"
            className="w-full object-cover"
          />
        </div>

      </div>
    </section>
  );
}