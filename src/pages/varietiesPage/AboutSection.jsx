import VarietiesPlantBg from "../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantbg.png";
import VarietiesPlant from "../../assets/images/VarietiesPageImages/AboutSectionImages/VaritiesPlant.png";
import VectorDesign from "../../assets/images/VarietiesPageImages/AboutSectionImages/VectorDesign.png";
import ScrollReveal from "../../components/ScrollReveal"
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
  <div className="max-w-[1440px] mx-auto">
    {varieties.map((item, index) => (
      <div
        key={index}
        className="bg-cover bg-center bg-no-repeat w-full py-10 px-16"
        style={{
          backgroundImage: `url(${VarietiesPlantBg})`,
        }}
      >
        {/* Title */}
        <ScrollReveal
          baseOpacity={0.1}
          enableBlur
          baseRotation={3}
          blurStrength={4}
          containerClassName="flex justify-center"
          textClassName="text-[#D9A52B] text-4xl lg:text-5xl font-secondary uppercase text-center"
        >
          {item.title}
        </ScrollReveal>

        {/* Divider */}
        <div className="flex justify-center my-4">
          <img
            src={VectorDesign}
            alt="Divider"
            className="w-[350px]"
          />
        </div>

        {/* Plant + Description */}
        <div
          className={`flex items-center justify-center gap-8 mt-6 ${
            item.imageLeft ? "flex-row" : "flex-row-reverse"
          }`}
        >
          {/* Plant */}
          <div className="w-[30%] flex justify-center">
            <img
              src={item.image}
              alt={item.title}
              className="h-[230px] object-contain"
            />
          </div>

          {/* Description */}
          <div className="w-[60%]">
            <ScrollReveal
              baseOpacity={0.1}
              enableBlur
              baseRotation={3}
              blurStrength={4}
              textClassName="text-[#EDCC65] text-2xl font-primary leading-8"
            >
              {item.description}
            </ScrollReveal>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>
  );
}
