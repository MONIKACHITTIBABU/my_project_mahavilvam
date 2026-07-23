import PurposeBg from "../../../assets/images/HomePageImages/PurposeImages/PurposeBg.png";
import VectorDesign from "../../../assets/images/HomePageImages/PurposeImages/VectorDesign.png";
import PurposeCard from "./PurposeCard";

export default function Purpose() {
  const purposeCards = [
    {
      type: "Spiritual",
      items: ["Spiritual Bond", "Energy Cleansing", "Fortune & Success"],
    },
    {
      type: "Environmental",
      items: [
        "Atmospheric Purification",
        "High Oxygen Release",
        "Cooling - Energizing",
      ],
      offset: true, // Move this card down
    },
    {
      type: "Medicinal",
      items: ["Immunity Booster", "Digestive Support", "Leaf - Bark - Root"],
    },
  ];

  return (
    <section className="relative py-10 overflow-hidden">
      <img
        src={PurposeBg}
        alt=""
        className="absolute inset-0 -z-10 w-full h-full object-cover"
      />

      <div className="container z-10">
        {/* Heading */}
        <h1 className="text-center gradient-text text-7xl font-secondary font-semibold z-10">
          THE PURPOSE
        </h1>
        <img
          src={VectorDesign}
          alt="Vector Design"
          className="w-full max-w-[600px] my-8 mx-auto"
        />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 justify-center gap-8 md:gap-12">
          {purposeCards.map((card, index) => (
            <div key={index} className={card.offset ? "md:mt-20" : ""}>
              <PurposeCard type={card.type} items={card.items} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
