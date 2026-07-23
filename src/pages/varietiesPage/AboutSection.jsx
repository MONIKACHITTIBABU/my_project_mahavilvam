import VarietiesPlantBg from "../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantbg.png";
import VarietiesPlant from "../../assets/images/VarietiesPageImages/AboutSectionImages/VaritiesPlant.png";
import VectorDesign from "../../assets/images/VarietiesPageImages/AboutSectionImages/VectorDesign.png";

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
    <section className="w-full ">
      <div className="max-w-[1440px] mx-auto">
        {varieties.map((item, index) => (
          <div
            key={index}
            className="bg-cover bg-center bg-no-repeat w-full h-[340px] flex items-center px-16"
            style={{
              backgroundImage: `url(${VarietiesPlantBg})`,
            }}
          >
            <div
              className={`flex items-center justify-between w-full ${
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

              {/* Content */}
              <div className="w-[60%] text-left">
                <h2 className="text-[#D9A52B] text-6xl font-secondary uppercase">
                  {item.title}
                </h2>

                <img
                  src={VectorDesign}
                  alt="Divider"
                  className="mx-auto my-4 w-[350px]"
                />

                <p className="text-[#EDCC65] text-xl font-primary leading-8 max-w-[650px] mx-auto">
                  {item.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}