// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Pot from "../../../assets/images/HomePageImages/BenefitsImage/Pot.png";
// import CommonBg from '../../../assets/images/Common/CommonBg.png';
// import ReusableSvg from "../../../components/ReusableSvg";
// import Box from "../../../assets/images/HomePageImages/BenefitsImage/Box.png";
// import FallingLeaves from "../../../components/FallingLeaves";

// gsap.registerPlugin(ScrollTrigger);

// const leftBenefits = [
//   "Divine Connection",
//   "Positive Energy",
//   "Medicinal Treasure",
// ];

// const rightBenefits = [
//   "Wealth-Luck Prosperity",
//   "High Oxygen Release",
// ];

// export default function Benefits() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // ================= DESKTOP ANIMATION (>= 1024px) =================
//       mm.add("(min-width: 1024px)", () => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             toggleActions: "restart none restart none",
//           },
//         });

//         // First Row
//         tl.from([".left-0", ".right-0"], {
//           y: -120,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.out",
//         })
//         // Second Row
//         .from([".left-1", ".right-1"], {
//           y: -120,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.out",
//         }, "+=0.15")
//         // Third Row
//         .from(".left-2", {
//           y: -120,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.out",
//         }, "+=0.15");
//       });

//       // ================= MOBILE & TABLET ANIMATION (< 1024px) =================
//       mm.add("(max-width: 1023px)", () => {
//         gsap.from(".benefit-box-mobile", {
//           y: -60,
//           opacity: 0,
//           duration: 0.7,
//           stagger: 0.18,
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             toggleActions: "restart none restart none",
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative isolate bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-24 overflow-hidden"
//       style={{ backgroundImage: `url(${CommonBg})` }}
//     >
//       {/* Falling Leaves Layer */}
//       <FallingLeaves count={12} />

//       <div className="container relative z-10 px-4 sm:px-6 mx-auto">
//         {/* Heading */}
//         <h2 className="heading gradient-text text-center text-2xl sm:text-4xl lg:text-5xl font-bold">
//           Benefits Of Mahavilvam
//         </h2>

//         <ReusableSvg />

//         {/* Main Grid Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-0 mt-6 sm:mt-10">

//           {/* Center Plant Pot */}
//           <div className="flex justify-center w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[300px] lg:max-w-none mx-auto order-1 lg:order-2 my-2 sm:my-4 lg:my-0">
//             <img
//               src={Pot}
//               alt="Mahavilvam Plant"
//               className="w-full h-auto object-contain"
//             />
//           </div>

//           {/* Left Column Benefits */}
//           <div className="flex flex-col gap-3 sm:gap-5 lg:gap-20 font-primary order-2 lg:order-1">
//             {leftBenefits.map((benefit, index) => (
//               <div
//                 key={benefit}
//                 className={`left-${index} benefit-box-mobile relative w-[68%] xs:w-[62%] sm:w-[55%] lg:w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[430px] aspect-[430/90] ${
//                   index % 2 === 0
//                     ? "self-start ml-2 sm:ml-6 lg:ml-0 lg:self-end"
//                     : "self-end mr-2 sm:mr-6 lg:mr-0 lg:self-end"
//                 }`}
//               >
//                 <img
//                   src={Box}
//                   alt=""
//                   className="w-full h-full object-contain"
//                 />

//                 <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-[11px] xs:text-xs sm:text-lg lg:text-3xl px-3 sm:px-6 text-center leading-tight">
//                   {benefit}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Column Benefits */}
//           <div className="flex flex-col gap-3 sm:gap-5 lg:gap-20 font-primary order-3 lg:order-3">
//             {rightBenefits.map((benefit, index) => (
//               <div
//                 key={benefit}
//                 className={`right-${index} benefit-box-mobile relative w-[68%] xs:w-[62%] sm:w-[55%] lg:w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[430px] aspect-[430/90] ${
//                   index % 2 === 0
//                     ? "self-end mr-2 sm:mr-6 lg:mr-0 lg:self-start"
//                     : "self-start ml-2 sm:ml-6 lg:ml-0 lg:self-start"
//                 }`}
//               >
//                 <img
//                   src={Box}
//                   alt=""
//                   className="w-full h-full object-contain rotate-180"
//                 />

//                 <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-[11px] xs:text-xs sm:text-lg lg:text-3xl px-3 sm:px-6 text-center leading-tight">
//                   {benefit}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

// import { useEffect, useRef } from "react";
// import { gsap } from "gsap";
// import { ScrollTrigger } from "gsap/ScrollTrigger";

// import Pot from "../../../assets/images/HomePageImages/BenefitsImage/Pot.png";
// import CommonBg from '../../../assets/images/Common/CommonBg.png';
// import ReusableSvg from "../../../components/ReusableSvg";
// import Box from "../../../assets/images/HomePageImages/BenefitsImage/Box.png";
// import FallingLeaves from "../../../components/FallingLeaves";

// gsap.registerPlugin(ScrollTrigger);

// const leftBenefits = [
//   "Divine Connection",
//   "Positive Energy",
//   "Medicinal Treasure",
// ];

// const rightBenefits = [
//   "Wealth-Luck Prosperity",
//   "High Oxygen Release",
// ];

// export default function Benefits() {
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       const mm = gsap.matchMedia();

//       // ================= DESKTOP & TV ANIMATION (>= 1024px) =================
//       mm.add("(min-width: 1024px)", () => {
//         const tl = gsap.timeline({
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             toggleActions: "restart none restart none",
//           },
//         });

//         // First Row
//         tl.from([".left-0", ".right-0"], {
//           y: -120,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.out",
//         })
//         // Second Row
//         .from([".left-1", ".right-1"], {
//           y: -120,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.out",
//         }, "+=0.15")
//         // Third Row
//         .from(".left-2", {
//           y: -120,
//           opacity: 0,
//           duration: 0.8,
//           ease: "power3.out",
//         }, "+=0.15");
//       });

//       // ================= MOBILE & TABLET ANIMATION (< 1024px) =================
//       mm.add("(max-width: 1023px)", () => {
//         gsap.from(".benefit-box-mobile", {
//           y: -60,
//           opacity: 0,
//           duration: 1.1, // Slowed down from 0.7s
//           stagger: 0.28,  // Slowed down stagger from 0.18s
//           ease: "power3.out",
//           scrollTrigger: {
//             trigger: sectionRef.current,
//             start: "top 70%",
//             toggleActions: "restart none restart none",
//           },
//         });
//       });
//     }, sectionRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className="relative isolate bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-24 2xl:py-32 3xl:py-40 overflow-hidden"
//       style={{ backgroundImage: `url(${CommonBg})` }}
//     >
//       {/* Falling Leaves Layer */}
//       <FallingLeaves count={12} />

//       <div className="container relative z-10 px-4 sm:px-6 2xl:max-w-[1600px] 3xl:max-w-[2000px] mx-auto">
//         {/* Heading */}
//         <h2 className="heading gradient-text text-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-6xl 3xl:text-7xl font-bold">
//           Benefits Of Mahavilvam
//         </h2>

//         <ReusableSvg />

//         {/* Main Grid Content */}
//         <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-0 2xl:gap-8 mt-6 sm:mt-10 2xl:mt-16">

//           {/* Center Plant Pot */}
//           <div className="flex justify-center w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[300px] lg:max-w-none 2xl:max-w-[400px] 3xl:max-w-[500px] mx-auto order-1 lg:order-2 my-2 sm:my-4 lg:my-0">
//             <img
//               src={Pot}
//               alt="Mahavilvam Plant"
//               className="w-full h-auto object-contain"
//             />
//           </div>

//           {/* Left Column Benefits */}
//           <div className="flex flex-col gap-3 sm:gap-5 lg:gap-20 2xl:gap-24 3xl:gap-28 font-primary order-2 lg:order-1">
//             {leftBenefits.map((benefit, index) => (
//               <div
//                 key={benefit}
//                 className={`left-${index} benefit-box-mobile relative w-[68%] xs:w-[62%] sm:w-[55%] lg:w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[430px] 2xl:max-w-[500px] 3xl:max-w-[600px] aspect-[430/90] ${
//                   index % 2 === 0
//                     ? "self-start ml-2 sm:ml-6 lg:ml-0 lg:self-end"
//                     : "self-end mr-2 sm:mr-6 lg:mr-0 lg:self-end"
//                 }`}
//               >
//                 <img
//                   src={Box}
//                   alt=""
//                   className="w-full h-full object-contain"
//                 />

//                 {/* Text styling updated: Larger on mobile only, original for desktop, enhanced for TV */}
//                 <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm xs:text-base sm:text-lg lg:text-3xl 2xl:text-4xl 3xl:text-5xl px-3 sm:px-6 text-center leading-tight">
//                   {benefit}
//                 </div>
//               </div>
//             ))}
//           </div>

//           {/* Right Column Benefits */}
//           <div className="flex flex-col gap-3 sm:gap-5 lg:gap-20 2xl:gap-24 3xl:gap-28 font-primary order-3 lg:order-3">
//             {rightBenefits.map((benefit, index) => (
//               <div
//                 key={benefit}
//                 className={`right-${index} benefit-box-mobile relative w-[68%] xs:w-[62%] sm:w-[55%] lg:w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[430px] 2xl:max-w-[500px] 3xl:max-w-[600px] aspect-[430/90] ${
//                   index % 2 === 0
//                     ? "self-end mr-2 sm:mr-6 lg:mr-0 lg:self-start"
//                     : "self-start ml-2 sm:ml-6 lg:ml-0 lg:self-start"
//                 }`}
//               >
//                 <img
//                   src={Box}
//                   alt=""
//                   className="w-full h-full object-contain rotate-180"
//                 />

//                 {/* Text styling updated: Larger on mobile only, original for desktop, enhanced for TV */}
//                 <div className="absolute inset-0 flex items-center justify-center text-white font-medium text-sm xs:text-base sm:text-lg lg:text-3xl 2xl:text-4xl 3xl:text-5xl px-3 sm:px-6 text-center leading-tight">
//                   {benefit}
//                 </div>
//               </div>
//             ))}
//           </div>

//         </div>
//       </div>
//     </section>
//   );
// }

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import Pot from "../../../assets/images/HomePageImages/BenefitsImage/Pot.png";
import CommonBg from "../../../assets/images/Common/CommonBg.png";
import ReusableSvg from "../../../components/ReusableSvg";
import Box from "../../../assets/images/HomePageImages/BenefitsImage/Box.png";
import FallingLeaves from "../../../components/FallingLeaves";

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
      className="relative isolate bg-cover bg-center bg-no-repeat py-12 sm:py-16 lg:py-24 2xl:py-36 3xl:py-48 overflow-hidden"
      style={{ backgroundImage: `url(${CommonBg})` }}
    >
      {/* Falling Leaves Layer */}
      <FallingLeaves count={12} />

      <div className="container relative z-10 px-4 sm:px-6 2xl:max-w-[2200px] 3xl:max-w-[2600px] mx-auto">
        {/* Heading */}
        <h2 className="heading gradient-text text-center text-2xl sm:text-4xl lg:text-5xl 2xl:text-8xl 3xl:text-9xl font-bold">
          Benefits Of Mahavilvam
        </h2>

        <ReusableSvg />

        {/* Main Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 items-center gap-6 lg:gap-0 2xl:gap-16 mt-6 sm:mt-10 2xl:mt-24">
          {/* Center Plant Pot */}
          <div className="flex justify-center w-full max-w-[180px] xs:max-w-[220px] sm:max-w-[300px] lg:max-w-none 2xl:max-w-[650px] 3xl:max-w-[800px] mx-auto order-1 lg:order-2 my-2 sm:my-4 lg:my-0">
            <img
              src={Pot}
              alt="Mahavilvam Plant"
              className="w-full h-auto object-contain"
            />
          </div>

          {/* Left Column Benefits */}
          <div className="flex flex-col gap-3 sm:gap-5 lg:gap-20 2xl:gap-32 3xl:gap-40 font-primary order-2 lg:order-1">
            {leftBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`left-${index} benefit-box-mobile relative w-[68%] xs:w-[62%] sm:w-[55%] lg:w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[430px] 2xl:max-w-[850px] 3xl:max-w-[1000px] aspect-[430/90] ${
                  index % 2 === 0
                    ? "self-start ml-2 sm:ml-6 lg:ml-0 lg:self-end"
                    : "self-end mr-2 sm:mr-6 lg:mr-0 lg:self-end"
                }`}
              >
                <img
                  src={Box}
                  alt=""
                  className="w-full h-full object-contain"
                />

                {/* Text sized to 6xl on 2xl screens, 7xl on 3xl screens */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg lg:text-3xl 2xl:text-3xl px-3 sm:px-6 2xl:px-12 text-center leading-tight">
                  {benefit}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column Benefits */}
          <div className="flex flex-col gap-3 sm:gap-5 lg:gap-20 2xl:gap-32 3xl:gap-40 font-primary order-3 lg:order-3">
            {rightBenefits.map((benefit, index) => (
              <div
                key={benefit}
                className={`right-${index} benefit-box-mobile relative w-[68%] xs:w-[62%] sm:w-[55%] lg:w-full max-w-[260px] sm:max-w-[320px] lg:max-w-[430px] 2xl:max-w-[850px] 3xl:max-w-[1000px] aspect-[430/90] ${
                  index % 2 === 0
                    ? "self-end mr-2 sm:mr-6 lg:mr-0 lg:self-start"
                    : "self-start ml-2 sm:ml-6 lg:ml-0 lg:self-start"
                }`}
              >
                <img
                  src={Box}
                  alt=""
                  className="w-full h-full object-contain rotate-180"
                />

                {/* Text sized to 6xl on 2xl screens, 7xl on 3xl screens */}
                <div className="absolute inset-0 flex items-center justify-center text-white font-bold text-sm xs:text-base sm:text-lg lg:text-3xl 2xl:text-3xl px-3 sm:px-6 2xl:px-12 text-center leading-tight">
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
