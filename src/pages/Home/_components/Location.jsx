import Location from "../../../assets/images/HomePageImages/LocationImages/Location.png";
import ChennaiVideo from "../../../assets/images/HomePageImages/LocationImages/ChennaiVideo.mp4";
import VelloreVideo from "../../../assets/images/HomePageImages/LocationImages/VelloreVideo.mp4";
import CommonBg from "../../../assets/images/Common/CommonBg.png";
import SideDesign from "../../../assets/images/HomePageImages/LocationImages/SideDesign.png";
import FallingLeaves from "../../../components/FallingLeaves";

export default function LocationsSection() {
  return (
    <section
      className="relative w-full py-10 sm:py-14 md:py-16 lg:py-20 bg-cover bg-center bg-no-repeat overflow-hidden"
      style={{
        backgroundImage: `url(${CommonBg})`,
      }}
    >
      {/* Falling Leaves Layer */}
      <FallingLeaves count={12} />

      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center gap-10 xl:gap-16">

        {/* Chennai Card */}
        <div className="w-full max-w-[600px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

          {/* Header */}
          <div className="h-20 sm:h-24 lg:h-[110px] flex items-center justify-center">
            <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-3xl sm:text-4xl lg:text-5xl font-semibold">
              CHENNAI
            </h2>
          </div>

          {/* Image + Video */}
          <div className="grid grid-cols-2">
            {/* Image */}
            <img
              src={Location}
              alt="Chennai"
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
            />

            {/* Video */}
            <video
              src={ChennaiVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
            />
          </div>
        </div>

        {/* Separator */}
        <img
          src={SideDesign}
          alt="Separator"
          className="hidden lg:block h-[360px] xl:h-[480px] object-contain"
        />

        {/* Vellore Card */}
        <div className="w-full max-w-[600px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

          {/* Header */}
          <div className="h-20 sm:h-24 lg:h-[110px] flex items-center justify-center">
            <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-3xl sm:text-4xl lg:text-5xl font-semibold">
              VELLORE
            </h2>
          </div>

          {/* Image + Video */}
          <div className="grid grid-cols-2">
            {/* Image */}
            <img
              src={Location}
              alt="Vellore"
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
            />

            {/* Video */}
            <video
              src={VelloreVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[280px] sm:h-[350px] md:h-[420px] lg:h-[500px] object-cover"
            />
          </div>
        </div>

      </div>
    </section>
  );
}