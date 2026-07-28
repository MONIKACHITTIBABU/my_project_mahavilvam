import Box from "../../../assets/images/HomePageImages/BenefitsImage/Box.png";

export default function BenefitBox({ benefit, index, side = "left" }) {
  const isLeft = side === "left";

  const alignClass = isLeft
    ? index % 2 === 0
      ? "self-start "
      : "self-end"
    : index % 2 === 0
      ? "self-end"
      : "self-start";

  return (
    <div
      className={`${side}-${index} benefit-box-mobile relative flex items-center justify-center w-full max-w-[200px] md:max-w-full py-3 md:py-4 lg:py-6 2xl:py-8 rounded-3xl border-2 md:border-3 xl:border-4 border-[#F3D275] overflow-hidden ${alignClass}`}
    >
      <img
        src={Box}
        alt=""
        className={`absolute inset-0 w-full h-full object-cover -z-0 ${isLeft ? "" : "rotate-180"}`}
        aria-hidden="true"
      />
      <div className="z-10 benefit-box-text">
        {benefit}
      </div>
    </div>
  );
}
