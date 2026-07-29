import VectorDesign from "../../../assets/images/HomePageImages/PurposeImages/VectorDesign.png";
import ReusableSvg from "../../../components/ReusableSvg";
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
        "Cooling - Energizing",
        "High Oxygen Release",
        "Atmospheric Purification",
      ],
      offset: true, // Move this card down
    },
    {
      type: "Medicinal",
      items: ["Immunity Booster", "Digestive Support", "Leaf - Bark - Root"],
    },
  ];

  return (
    <section className="relative py-6 md:py-10 xl:py-15 overflow-hidden">
      <div className="container relative z-10">
        {/* Heading */}
        <h1 className="heading gradient-text">THE PURPOSE</h1>
        <ReusableSvg />

        {/* Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 max-w-7xl mx-auto justify-center gap-8 md:gap-12mt-10 md:mt-16">
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