import VarietiesPlantBg from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantBg.png";
import VarietiesPlantBg2 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantBg2.png";
import VarietiesPlant from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VaritiesPlant.png";
import ReusableSvg from "../../../components/ReusableSvg";
import ScrollReveal from "../../../components/ScrollReveal";
import FallingLeaves from "../../../components/FallingLeaves"; // Import component

export default function AboutSection() {
  const varieties = [
    {
      title: "PANCHAMUKI BELPATRA",
      image: VarietiesPlant,
      imageLeft: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
    {
      title: "TRAYODASHA-PATRA",
      image: VarietiesPlant,
      imageLeft: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
    {
      title: "TRIPATRA",
      image: VarietiesPlant,
      imageLeft: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
  ];

  return (
    <section className="w-full">
      {varieties.map((item, index) => (
        <div
          key={index}
          className="relative w-full min-h-[750px] overflow-hidden"
        >
          {/* Leaves animation scoped specifically for this section */}
          <FallingLeaves count={12} />

          {/* Background */}
          <img
            src={index === 1 ? VarietiesPlantBg2 : VarietiesPlantBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />

          {/* Content */}
          <div className="container h-full py-20 flex flex-col justify-center relative z-20">
            {/* Heading */}
            <div className="text-center mt-6 mb-14">
              <h2 className="gradient-text font-secondary text-[40px] md:text-[56px] lg:text-[72px]">
                {item.title}
              </h2>

              <div className="flex justify-center mt-4">
                <ReusableSvg />
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex flex-col lg:flex-row items-center justify-between gap-16 ${
                item.imageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Plant */}
              <div className="w-full lg:w-[38%] flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-[320px] md:w-[380px] lg:w-[430px] xl:w-[470px] object-contain ${
                    index === 1 ? "translate-y-20" : "translate-y-16"
                  }`}
                />
              </div>

              {/* Description wrapped with ScrollReveal */}
              <div className="w-full lg:w-[62%] text-center lg:text-left">
                <ScrollReveal textClassName="font-primary text-[#D9A329] text-[20px] md:text-[24px] lg:text-[28px] leading-[1.8]">
                  {item.description}
                </ScrollReveal>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}