import PruposeCard from "../../../assets/images/HomePageImages/PurposeImages/PurposeCard.png"

export default function PurposeCard({
  title,
  items,
  type,
  className,
}) {
  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Card */}
      <div
        className="
          w-[400px]
          h-[330px]
          relative
          flex
          flex-col
          justify-center
          items-center
          bg-center
          bg-no-repeat
          bg-contain
          px-10
          pt-12
          pb-8
        "
        style={{
          backgroundImage: `url(${PruposeCard})`,
        }}
      >
        {items.map((item, index) => (
          <p
            key={index}
            className="text-white text-3xl font-primary font-medium leading-10 text-center"
          >
            {item}
          </p>
        ))}
      </div>

      {/* Bottom Label */}
      <h3 className="text-[#E0B020] text-3xl font-primary font-semibold mt-6">
        {type}
      </h3>
    </div>
  );
}