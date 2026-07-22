import PurposeBg from "../../../assets/images/HomePageImages/PurposeImages/PurposeBg.png"
import VectorDesign from "../../../assets/images/HomePageImages/PurposeImages/VectorDesign.png"
import PurposeCard from "./PurposeCard";

export default function Purpose() {
  return (
    <section
      className="py-24 bg-repeat"
      style={{
        backgroundImage: `url(${PurposeBg})`,
      }}
    >
        
      <div className="max-w-[1440px] mx-auto px-8">

        {/* Heading */}
        <h2 className="text-center text-[#E0B020] text-7xl font-secondary font-semibold mb-16">
          THE PURPOSE
        </h2>
         <img
                      src={VectorDesign}
                      alt="Vector Design"
                      className="w-[689px] mb-8 mx-auto"
                    />

        {/* Cards */}
        <div className="flex justify-center gap-16 -mt-10">

          <PurposeCard
            type="Spiritual"
            items={[
              "Spiritual Bond",
              "Energy Cleansing",
              "Fortune & Success",
            ]}
          />

          <PurposeCard
            type="Environmental"
            items={[
              "Atmospheric Purification",
              "High Oxygen Release",
              "Cooling - Energizing",
            ]}
            className={"mt-20"}
          />

          <PurposeCard
            type="Medicinal"
            items={[
              "Immunity Booster",
              "Digestive Support",
              "Leaf - Bark - Root",
            ]}
          />

        </div>

      </div>
    </section>
  );
}