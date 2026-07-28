import PruposeCard from "../../../assets/images/HomePageImages/PurposeImages/PurposeCard.png";

export default function PurposeCard({ title, items, type, className }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Card */}
      <div
        className="w-full min-h-80 md:min-h-96 lg:min-h-75  max-w-[350px] md:min-w-110 lg:min-w-auto relative flex flex-col justify-center items-center"
      >
        <img
          src={PruposeCard}
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-fit"
        />

        {items.map((item, index) => (
          <p
            key={index}
            className="text-2xl md:text-3xl lg:text-2xl text-center text-white my-2 md:my-3"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Bottom Label */}
      <h3 className="text-3xl gradient-text font-primary font-semibold mt-6">
        {type}
      </h3>
    </div>
  );
}
