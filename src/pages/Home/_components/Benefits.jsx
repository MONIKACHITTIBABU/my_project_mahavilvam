import Pot from "../../../assets/images/HomePageImages/BenefitsImage/Pot.png";
import BenefitsBg from "../../../assets/images/HomePageImages/BenefitsImage/BenefitsBg.png";
import VectorDesign from "../../../assets/images/HomePageImages/BenefitsImage/VectorDesign.png";

const leftBenefits = [
  "Divine Connection",
  "Positive Energy",
  "Medicinal Treasure",
];

const rightBenefits = ["Wealth-Luck Prosperity", "High Oxygen Release"];

export default function Benefits() {
  return (
    <section
      className="bg-cover bg-center bg-no-repeat py-24 overflow-hidden"
      style={{ backgroundImage: `url(${BenefitsBg})`,}}>
      <div className="container">
        {/* Heading */}
        <h2 className="text-center text-[#D8A94A] text-7xl gradient-text font-secondary uppercase font-semibold mb-20">
          Benefits Of Mahavilvam
        </h2>
        <img src={VectorDesign} alt="Vector Design" className="w-[689px] mt-8 mx-auto" />

        {/* Content */}
        <div className="grid grid-cols-3 items-center">
          {/* Left Benefits */}
          <div className="flex flex-col items-end font-primary text-3xl gap-20">
            {leftBenefits.map((benefit) => (
              <div key={benefit} className=" w-full py-3 rounded-full text-center text-white font-medium border border-[#F3D58C] shadow-lg bg-gradient-to-r from-[#B56A10] via-[#E5B85A] to-[#B56A10]" >
                {benefit}
              </div>
            ))}
          </div>

          {/* Plant */}
          <div className="flex justify-center w-full mx-auto">
            <img src={Pot} alt="Mahavilvam Plant" className="w-full h-full object-contain" />
          </div>

          {/* Right Benefits */}
          <div className="flex flex-col items-start font-primary text-3xl gap-20">
            {rightBenefits.map((benefit) => (
              <div key={benefit} className="w-full py-3 rounded-full text-center text-white font-medium border border-[#F3D58C] shadow-lg bg-gradient-to-r from-[#B56A10] via-[#E5B85A] to-[#B56A10] " >
                {benefit}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
