import ChennaiImage from "../../../assets/images/HomePageImages/LocationImages/ChennaiImage.jpeg";
import VelloreImage from "../../../assets/images/HomePageImages/LocationImages/VelloreImage.jpg";
import ChennaiVideo from "../../../assets/images/HomePageImages/LocationImages/ChennaiVideo.mp4";
import VelloreVideo from "../../../assets/images/HomePageImages/LocationImages/VelloreVideo.mp4";
import CommonBg from "../../../assets/images/Common/CommonBg.png";
import SideDesign from "../../../assets/images/HomePageImages/LocationImages/SideDesign.png";
import FallingLeaves from "../../../components/FallingLeaves";
import LocationCard from "./LocationCard";

export default function LocationsSection() {
  return (
    <section
      className="relative w-full py-6 md:py-10 overflow-hidden"
    >

      <img src={CommonBg} alt="" className="absolute inset-0 w-full h-full object-cover -z-10" />
      <FallingLeaves count={12} />

      <div className="container relative z-10 flex flex-col md:flex-row items-center justify-center gap-8 xl:gap-12 px-4">
        <LocationCard
          title="CHENNAI"
          image={ChennaiImage}
          video={ChennaiVideo}
          imageAlt="Chennai"
        />

        <img
          src={SideDesign}
          alt="Separator"
          className="rotate-90 md:rotate-0 block -my-35 md:-my-0 h-full md:h-60 xl:h-96 object-contain"
        />

        <LocationCard
          title="VELLORE"
          image={VelloreImage}
          video={VelloreVideo}
          imageAlt="Vellore"
        />
      </div>
    </section>
  );
}
