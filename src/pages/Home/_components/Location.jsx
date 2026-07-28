import ChennaiImage from "../../../assets/images/HomePageImages/LocationImages/ChennaiImage.jpeg";
import VelloreImage from "../../../assets/images/HomePageImages/LocationImages/VelloreImage.jpg";
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
      <FallingLeaves count={12} />

      <div className="container relative z-10 mx-auto flex flex-col lg:flex-row items-center justify-center gap-8 xl:gap-12 px-4">

        {/* ================= Chennai Card ================= */}
        <div className="w-full max-w-[460px] lg:max-w-[500px] xl:max-w-[520px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

          {/* ---------- Mobile Layout ---------- */}
          <div className="block lg:hidden">

            {/* Image */}
            <img
              src={ChennaiImage}
              alt="Chennai"
              className="w-full h-[220px] object-cover"
            />

            {/* Video */}
            <video
              src={ChennaiVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[220px] object-cover"
            />

            {/* Title */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-2xl font-semibold">
                CHENNAI
              </h2>
            </div>

          </div>

          {/* ---------- Desktop Layout ---------- */}
          <div className="hidden lg:block">

            {/* Header */}
            <div className="h-[70px] xl:h-[80px] flex items-center justify-center">
              <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-3xl xl:text-4xl font-semibold">
                CHENNAI
              </h2>
            </div>

            {/* Image + Video */}
            <div className="grid grid-cols-2">
              <img
                src={ChennaiImage}
                alt="Chennai"
                className="w-full h-[360px] xl:h-[400px] object-cover"
              />

              <video
                src={ChennaiVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[360px] xl:h-[400px] object-cover"
              />
            </div>

          </div>
        </div>

        {/* Separator */}
        <img
          src={SideDesign}
          alt="Separator"
          className="hidden lg:block h-[280px] xl:h-[340px] object-contain"
        />

        {/* ================= Vellore Card ================= */}
        <div className="w-full max-w-[460px] lg:max-w-[500px] xl:max-w-[520px] rounded-[24px] border-2 border-[#C89B3C] bg-[#021A17] overflow-hidden shadow-lg">

          {/* ---------- Mobile Layout ---------- */}
          <div className="block lg:hidden">

            {/* Image */}
            <img
              src={VelloreImage}
              alt="Vellore"
              className="w-full h-[220px] object-cover"
            />

            {/* Video */}
            <video
              src={VelloreVideo}
              autoPlay
              muted
              loop
              playsInline
              className="w-full h-[220px] object-cover"
            />

            {/* Title */}
            <div className="h-16 flex items-center justify-center">
              <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-2xl font-semibold">
                VELLORE
              </h2>
            </div>

          </div>

          {/* ---------- Desktop Layout ---------- */}
          <div className="hidden lg:block">

            {/* Header */}
            <div className="h-[70px] xl:h-[80px] flex items-center justify-center">
              <h2 className="text-[#D8A94A] gold-gradient-text font-secondary text-3xl xl:text-4xl font-semibold">
                VELLORE
              </h2>
            </div>

            {/* Image + Video */}
            <div className="grid grid-cols-2">
              <img
                src={VelloreImage}
                alt="Vellore"
                className="w-full h-[360px] xl:h-[400px] object-cover"
              />

              <video
                src={VelloreVideo}
                autoPlay
                muted
                loop
                playsInline
                className="w-full h-[360px] xl:h-[400px] object-cover"
              />
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}