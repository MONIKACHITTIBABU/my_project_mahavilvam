import ChennaiBg from "../../assets/images/LocationImages/AboutLocationImages/ChennaiBg.png";
import VectorLine from "../../assets/images/LocationImages/AboutLocationImages/VectorLine.png";

import Plant1 from "../../assets/images/LocationImages/AboutLocationImages/Plant1.png";
import Plant2 from "../../assets/images/LocationImages/AboutLocationImages/Plant2.png";
import Plant3 from "../../assets/images/LocationImages/AboutLocationImages/Plant3.png";
import Plant4 from "../../assets/images/LocationImages/AboutLocationImages/Plant4.png";

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

export default function AboutLocation() {
  return (
    <section
      className="w-full bg-cover bg-center bg-no-repeat py-16"
      style={{
        backgroundImage: `url(${ChennaiBg})`,
      }}
    >
      <div className="max-w-7xl mx-auto px-6">
        {locations.map((location, index) => (
          <div key={index} className="mb-24">
            {/* Heading */}
            <div className="flex flex-col items-center">
              <h2
                className="text-[72px] text-[#E7B545] uppercase"
                style={{ fontFamily: "'Marcellus SC', serif" }}
              >
                {location.title}
              </h2>

              <img
                src={VectorLine}
                alt="Vector Line"
                className="w-[220px] mt-2"
              />

              <p className="mt-6 text-[#D5A53A] text-3xl font-semibold">
                {location.subtitle}
              </p>
            </div>

            {/* Images */}
            <div className="mt-10 flex justify-center">
              <div className="flex">
                {location.images.map((img, i) => (
                  <div key={i} className="flex">
                    <img
                      src={img}
                      alt=""
                      className="w-[280px] h-[300px] object-cover"
                    />

                    {i !== location.images.length - 1 && (
                      <div className="w-[2px] bg-[#D5A53A]"></div>
                    )}
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