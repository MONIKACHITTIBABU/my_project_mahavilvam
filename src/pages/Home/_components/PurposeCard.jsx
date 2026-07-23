import PruposeCard from "../../../assets/images/HomePageImages/PurposeImages/PurposeCard.png";

export default function PurposeCard({ title, items, type, className }) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Card */}
      <div
        className="w-full min-h-[320px] max-w-[350px] relative flex flex-col justify-center items-center px-10 pt-12 pb-8"
      >
        <img
          src={PruposeCard}
          alt=""
          className="absolute inset-0 -z-10 w-full h-full object-fit"
        />

        {items.map((item, index) => (
          <p
            key={index}
            className="text-white text-2xl font-primary font-medium leading-10 text-center"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Bottom Label */}
      <h3 className="text-[#E0B020] text-3xl gradient-text font-primary font-semibold mt-6">
        {type}
      </h3>
    </div>
  );
}
