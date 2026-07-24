import VarietiesPlantBg from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VarietiesPlantBg.png";
import VarietiesPlant from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VaritiesPlant.png";
// import VectorDesign from "../../../assets/images/VarietiesPageImages/AboutSectionImages/VectorDesign.png";
import ReusableSvg from "../../../components/ReusableSvg";
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
    <section className="w-full relative">
      <img
        src={VarietiesPlantBg}
        alt=""
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />
      <div className="container">
        {varieties.map((item, index) => (
          <div
            key={index}
            className="py-10 md:py-14 lg:py-16 px-4 sm:px-6 lg:px-12"
          >
            <h2 className="heading gradient-text">{item.title}</h2>
            <ReusableSvg />

            <div
              className={`flex flex-col lg:flex-row items-center gap-8 lg:gap-12 ${
                item.imageLeft ? "" : "lg:flex-row-reverse"
              }`}
            >
              {/* Plant Image */}
              <div className="w-full lg:w-[30%] flex justify-center">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-40 sm:w-52 md:w-64 lg:w-auto h-auto lg:h-[230px] object-contain"
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-[70%] text-center lg:text-left">
                {/* <img
                  src={VectorDesign}
                  alt="Divider"
                  className="my-4 w-40 sm:w-56 md:w-72 lg:w-[350px] mx-auto lg:mx-0"
                /> */}
                <p className="description">{item.description}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
