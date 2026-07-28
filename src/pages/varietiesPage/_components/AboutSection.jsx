import VarietiesPlantBg from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantbg.png";
import VarietiesPlantBg2 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantBg2.png";

import VarietiesPlant1 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant1.png";
import VarietiesPlant2 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant2.png";
import VarietiesPlant3 from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlant3.png";

import ReusableSvg from "../../../components/ReusableSvg";
import ScrollReveal from "../../../components/ScrollReveal";
import FallingLeaves from "../../../components/FallingLeaves";

export default function AboutSection() {
  const varieties = [
    {
      title: "PANCHAMUKI BELPATRA",
      image: VarietiesPlant1,
      imageLeft: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
    {
      title: "TRAYODASHA-PATRA",
      image: VarietiesPlant2,
      imageLeft: false,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
    {
      title: "TRIPATRA",
      image: VarietiesPlant3,
      imageLeft: true,
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London.",
    },
  ];

  return (
    <section className="w-full overflow-hidden">
      {varieties.map((item, index) => (
        <div
          key={index}
          className="relative w-full min-h-screen md:min-h-[750px] lg:min-h-[850px] overflow-hidden flex items-center"
        >

          <FallingLeaves count={12} />

          {/* Background */}
          <img
            src={index === 1 ? VarietiesPlantBg2 : VarietiesPlantBg}
            alt=""
            className="absolute inset-0 w-full h-full object-cover -z-10"
          />


          {/* Content */}
          <div className="relative z-20 w-full max-w-[1600px] mx-auto px-4 sm:px-6 md:px-10 py-10 sm:py-12 md:py-20 flex flex-col justify-between h-full">


            <div className="text-center mb-3 sm:mb-4 md:mb-5 lg:mb-3">

              <h2 className="gradient-text font-secondary text-[26px] sm:text-[34px] md:text-[50px] lg:text-[72px] tracking-wide uppercase leading-none">
                {item.title}
              </h2>

              <div className="flex justify-center -mt-1 md:-mt-2">
                <div className="w-[180px] sm:w-[220px] md:w-[260px] lg:w-[320px] xl:w-[380px]">
                  <ReusableSvg />
                </div>
              </div>

              {/* Plant + Description */}
              <div
                className={`flex flex-col md:flex-row items-end justify-between gap-8 md:gap-12 ${item.imageLeft ? "" : "md:flex-row-reverse"
                  }`}
              >


                {/* Plant Image */}
                <div
                  className={`w-full md:w-[50%] flex items-end self-stretch ${item.imageLeft ? "justify-start" : "justify-end"
                    }`}
                >
                  <div
                    className={`relative w-[110px] sm:w-[150px] md:w-[200px] lg:w-[250px] xl:w-[300px] max-w-none mt-10 md:mt-16 lg:mt-20 ${item.imageLeft
                      ? "-ml-3 sm:-ml-5 md:-ml-8 lg:-ml-10"
                      : "-mr-3 sm:-mr-5 md:-mr-8 lg:-mr-10"
                      }`}
                  >
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full object-contain block"
                    />
                    {/* Golden Line */}
                    <div
                      className={`md:hidden h-[2px] w-[120%] absolute bottom-0 bg-gradient-to-r ${item.imageLeft
                        ? "left-0 from-[#D9A329] via-[#D9A329]/70 to-transparent"
                        : "right-0 from-transparent via-[#D9A329]/70 to-[#D9A329]"
                        }`}
                    />

                  </div>

                </div>

                {/* Description */}
                <div
                  className={`w-full md:w-[42%] lg:w-[38%] xl:w-[36%] flex items-end pb-0 px-4 sm:px-6 md:px-4 ${item.imageLeft
                      ? "text-left md:mr-auto"
                      : "text-right md:ml-auto"
                    }`}
                >

                  <div className="max-w-[500px]">
                    <ScrollReveal
                      delay={0}
                      duration={0.5}
                      textClassName={`font-primary text-[#D9A329]
                      text-[14px] sm:text-[16px] md:text-[18px] lg:text-[22px] xl:text-[24px]
                      leading-[1.8]
                      ${item.imageLeft ? "text-left" : "text-right"}`}
                    >
                      {item.description}
                    </ScrollReveal>
                  </div>
                </div>

              </div>
            </div>

          </div>

          {/* Mobile Bottom Line */}
          <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#D9A329] z-30 md:hidden" />

        </div>
      ))}
    </section>
  );
}