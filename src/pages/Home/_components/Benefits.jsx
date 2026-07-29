import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Pot from "../../../assets/images/HomePageImages/BenefitsImage/Pot.png";
import ReusableSvg from "../../../components/ReusableSvg";
import BenefitBox from "./BenefitBox";

gsap.registerPlugin(ScrollTrigger);

const leftBenefits = [
  "Divine Connection",
  "Positive Energy",
  "Medicinal Treasure",
];

const rightBenefits = ["Wealth-Luck Prosperity", "High Oxygen Release"];

export default function Benefits() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      // ================= DESKTOP & TV ANIMATION (>= 1024px) =================
      mm.add("(min-width: 1024px)", () => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart none restart none",
          },
        });

        // First Row
        tl.from([".left-0", ".right-0"], {
          y: -120,
          opacity: 0,
          duration: 0.8,
          ease: "power3.out",
        })
          // Second Row
          .from(
            [".left-1", ".right-1"],
            {
              y: -120,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "+=0.15",
          )
          // Third Row
          .from(
            ".left-2",
            {
              y: -120,
              opacity: 0,
              duration: 0.8,
              ease: "power3.out",
            },
            "+=0.15",
          );
      });

      // ================= MOBILE & TABLET ANIMATION (< 1024px) =================
      mm.add("(max-width: 1023px)", () => {
        gsap.from(".benefit-box-mobile", {
          y: -60,
          opacity: 0,
          duration: 1.1,
          stagger: 0.28,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            toggleActions: "restart none restart none",
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative isolate py-6 md:py-10 xl:py-15 overflow-hidden"
    >
      <div className="container relative z-10">
        {/* Heading */}
        <h2 className="heading gradient-text">
          Benefits Of Mahavilvam
        </h2>

        <ReusableSvg />

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 items-center gap-3 xl:gap-6">
          {/* Left Column Benefits */}
          <div className="flex flex-col gap-3 md:gap-8 lg:gap-20 2xl:gap-32 order-2 md:order-1">
            {leftBenefits.map((benefit, index) => (
              <BenefitBox
                key={benefit}
                benefit={benefit}
                index={index}
                side="left"
              />
            ))}
          </div>

          {/* Center Plant Pot */}
          <div className="flex justify-center w-full max-w-[180px] lg:max-w-none mx-auto order-1 lg:order-2 my-2 sm:my-4 lg:my- 0">
            <img
              src={Pot}
              alt="Mahavilvam Plant"
              className="w-full h-auto object-cover"
            />
          </div>

          {/* Right Column Benefits */}
          <div className="flex flex-col gap-3 md:gap-8 lg:gap-20 2xl:gap-32 order-3">
            {rightBenefits.map((benefit, index) => (
              <BenefitBox
                key={benefit}
                benefit={benefit}
                index={index}
                side="right"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
