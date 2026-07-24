import ChennaiBg from "../../../assets/images/LocationImages/AboutLocationImages/ChennaiBg.png";
import VectorLine from "../../../assets/images/LocationImages/AboutLocationImages/VectorLine.png";

import Plant1 from "../../../assets/images/LocationImages/AboutLocationImages/Plant1.png";
import Plant2 from "../../../assets/images/LocationImages/AboutLocationImages/Plant2.png";
import Plant3 from "../../../assets/images/LocationImages/AboutLocationImages/Plant3.png";
import Plant4 from "../../../assets/images/LocationImages/AboutLocationImages/Plant4.png";

const locations = [
  {
    title: "CHENNAI",
    subtitle: "Nursery - 10,000 sft at Chennai",
    images: [Plant1, Plant2, Plant3, Plant4],
  },
  {
    title: "VELLORE",
    subtitle: "Nearly 2 acres in Vellore",
    images: [Plant4, Plant3, Plant2, Plant1],
  },
];

export default function LocationAbout() {
  return (
    <section
      className="relative py-6 md:py-10 overflow-hidden"

    >
      <img src={ChennaiBg} alt="Background" className="absolute inset-0 w-full h-full object-cover -z-10" />

      {/* Content */}
      <div className="container z-10">
        {locations.map((location, index) => (
          <div key={index} className="my-10">
            {/* Heading */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-secondary uppercase text-yellow-primary">
                {location.title}
              </h2>

              <img
                src={VectorLine}
                alt="Vector Line"
                className="w-28 sm:w-36 md:w-44 lg:w-80 mt-2"
              />

              <p className="mt-4 md:mt-6 text-yellow-secondary text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                {location.subtitle}
              </p>
            </div>

            {/* Images */}
            <div className="mt-8 md:mt-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {location.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-yellow-secondary"
                  >
                    <img
                      src={img}
                      alt={`${location.title} ${i + 1}`}
                      className="w-full h-40 sm:h-52 md:h-64 lg:h-72 xl:h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}