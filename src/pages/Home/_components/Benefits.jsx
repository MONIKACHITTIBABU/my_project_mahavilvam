import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Pot from "../../../assets/images/HomePageImages/BenefitsImage/Pot.png";
import CommonBg from '../../../assets/images/Common/CommonBg.png';
import ReusableSvg from "../../../components/ReusableSvg";
import Box from "../../../assets/images/HomePageImages/BenefitsImage/Box.png";
import FallingLeaves from "../../../components/FallingLeaves";

gsap.registerPlugin(ScrollTrigger);

const leftBenefits = [
  "Divine Connection",
  "Positive Energy",
  "Medicinal Treasure",
];

const rightBenefits = [
  "Wealth-Luck Prosperity",
  "High Oxygen Release",
];

export default function Benefits() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 75%",
          toggleActions: "restart none restart none",
        },
      });

      // First Row (Left + Right together)
      tl.from(
        [".left-0", ".right-0"],
        {
          y: -150,
          opacity: 0,
          duration: 0.9,
          ease: "power3.out",
        }
      )

        // Second Row (Left + Right together)
        .from(
          [".left-1", ".right-1"],
          {
            y: -150,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "+=0.2"
        )

        // Third Row (Only Left)
        .from(
          ".left-2",
          {
            y: -150,
            opacity: 0,
            duration: 0.9,
            ease: "power3.out",
          },
          "+=0.2"
        );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate bg-cover bg-center bg-no-repeat py-24 overflow-hidden"
      style={{ backgroundImage: `url(${CommonBg})` }}
    >
      {/* Falling Leaves Layer */}
      <FallingLeaves count={12} />

      <div className="container relative z-10">
        {/* Heading */}
        <h2 className="heading gradient-text">
          Benefits Of Mahavilvam
        </h2>

        <ReusableSvg />

        {/* Content */}
        <div className="grid grid-cols-3 items-center">

          {/* Left */}
          <div className="flex flex-col items-end gap-20 font-primary text-3xl">
            {leftBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`left-${index} relative w-[430px] h-[90px]`}
              >
                <img
                  src={Box}
                  alt=""
                  className="w-full h-full object-contain"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                  {benefit}
                </div>
              </div>
            ))}
          </div>

          {/* Plant */}
          <div className="flex justify-center w-full mx-auto">
            <img
              src={Pot}
              alt="Mahavilvam Plant"
              className="w-full h-full object-contain"
            />
          </div>

          {/* Right */}
          <div className="flex flex-col items-start gap-20 font-primary text-3xl">
            {rightBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`right-${index} relative w-[430px] h-[90px]`}
              >
                <img
                  src={Box}
                  alt=""
                  className="w-full h-full object-contain rotate-180"
                />

                <div className="absolute inset-0 flex items-center justify-center text-white font-medium">
                  {benefit}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}