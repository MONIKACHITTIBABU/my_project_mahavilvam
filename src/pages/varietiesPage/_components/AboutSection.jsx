import VarietiesPlantBg from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantBg.png";
import VarietiesPlantBg2 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantBg2.png";
import VarietiesPlant from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VaritiesPlant.png";
import ReusableSvg from "../../../components/ReusableSvg";
import ScrollReveal from "../../../components/ScrollReveal";
import FallingLeaves from "../../../components/FallingLeaves";

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
          {/* Falling Leaves */}
          <FallingLeaves count={12} />

          {/* Background */}
          <img
            src={index === 1 ? VarietiesPlantBg2 : VarietiesPlantBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />

          {/* Content */}
          <div className="container h-full py-12 sm:py-16 md:py-20 flex flex-col justify-center relative z-20">
            {/* Heading */}
            <div className="text-center mt-4 md:mt-6 mb-10 md:mb-14">
              <h2 className="gradient-text font-secondary text-[30px] sm:text-[36px] md:text-[50px] lg:text-[72px]">
                {item.title}
              </h2>

              <div className="flex justify-center mt-4">
                <ReusableSvg />
              </div>
            </div>

            {/* Content */}
            <div
              className={`flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 lg:gap-16 ${
                item.imageLeft ? "" : "md:flex-row-reverse"
              }`}
            >
              {/* Plant Image */}
              <div className="w-full md:w-[40%] lg:w-[38%] flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className={`w-[220px] sm:w-[280px] md:w-[300px] lg:w-[430px] xl:w-[470px] object-contain ${
                    index === 1
                      ? "translate-y-8 md:translate-y-12 lg:translate-y-20"
                      : "translate-y-6 md:translate-y-10 lg:translate-y-16"
                  }`}
                />
              </div>

              {/* Description */}
              <div
                className={`w-full md:w-[60%] lg:w-[62%] text-center ${
                  item.imageLeft ? "md:text-left" : "md:text-right"
                }`}
              >
                <ScrollReveal textClassName="font-primary text-[#D9A329] text-[16px] sm:text-[18px] md:text-[20px] lg:text-[28px] leading-[1.8]">
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