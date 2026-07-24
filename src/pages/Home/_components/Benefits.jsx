import Pot from "../../../assets/images/HomePageImages/BenefitsImage/Pot.png";
import BenefitsBg from "../../../assets/images/HomePageImages/BenefitsImage/BenefitsBg.png";
import VectorDesign from "../../../assets/images/HomePageImages/BenefitsImage/VectorDesign.png";
import ReusableSvg from "../../../components/ReusableSvg";
import Box from "../../../assets/images/HomePageImages/BenefitsImage/Box.png";

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
      style={{ backgroundImage: `url(${BenefitsBg})` }}
    >
      <div className="container">
        {/* Heading */}
        <h2 className="heading gradient-text">Benefits Of Mahavilvam</h2>
        <ReusableSvg />

        {/* Content */}
        <div className="grid grid-cols-3 items-center">
          {/* Left Benefits */}
          <div className="flex flex-col items-end gap-20 font-primary text-3xl">
            {leftBenefits.map((benefit) => (
              <div key={benefit} className="relative w-[430px] h-[90px]">
                <img
                  src={Box}
                  alt=""
                  className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                  {benefit}
                </div>
              </div>
            ))}
          </div>
          {/* Plant */}
          <div className="flex justify-center w-full mx-auto">
            <img
              src={Pot}
              alt="Mahavilvam Plant"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right Benefits */}
          <div className="flex flex-col items-start gap-20 font-primary text-3xl">
            {rightBenefits.map((benefit) => (
              <div key={benefit} className="relative w-[430px] h-[90px]">
                <img
                  src={Box}
                  alt=""
                  className="w-full h-full object-contain rotate-180"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                  {benefit}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
