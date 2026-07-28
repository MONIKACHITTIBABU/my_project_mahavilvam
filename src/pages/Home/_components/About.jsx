// // import CommonBg from "../../../assets/images/Common/CommonBg.png";
// // import AboutGif from "../../../assets/images/Gif/AboutGif.gif";
// // import SideDesign from "../../../assets/images/HomePageImages/AboutImages/SideDesign.png";

// // import ScrollReveal from "../../../components/ScrollReveal";
// // import ReusableSvg from "../../../components/ReusableSvg";
// // import FallingLeaves from "../../../components/FallingLeaves";

// // export default function About({
// //   description,
// //   baseOpacity,
// //   enableBlur,
// //   baseRotation,
// //   blurStrength,
// // }) {
// //   return (
// //     <section
// //       className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden py-6 md:py-10"
// //     >
// //       {/* Background */}
// //       <img
// //         src={CommonBg}
// //         alt="Background"
// //         className="absolute inset-0 h-full w-full object-cover -z-10"
// //       />

// //       {/* Falling Leaves Layer */}
// //       <FallingLeaves count={12} />

// //       {/* Content */}
// //       <div className="container relative z-20 flex flex-col md:flex-row items-center justify-between gap-8">

// //         {/* Left Plant */}
// //         <div className="w-full md:w-[40%] flex justify-center">
// //           <img
// //             src={AboutGif}
// //             alt="Mahavilvam Plant"
// //             className="w-full lg:w-[80%] h-auto object-cover -translate-y-4 md:-translate-y-10 lg:-translate-y-36"
// //           />
// //         </div>

// //         {/* Right Content */}
// //         <div className="w-full md:w-[60%] flex items-center justify-center lg:justify-end gap-4 sm:gap-6 md:gap-8">

// //           {/* Text */}
// //           <div className="w-full text-center description lg:text-left">
// //             <ScrollReveal
// //               baseOpacity={baseOpacity}
// //               enableBlur={enableBlur}
// //               baseRotation={baseRotation}
// //               blurStrength={blurStrength}
// //               textClassName="!gradient-text font-primary leading-relaxed xl:text-3xl"
// //             >
// //               {description}
// //             </ScrollReveal>

// //             <ReusableSvg />
// //           </div>

// //           {/* Side Design */}
// //           <div className="hidden md:flex flex-shrink-0 items-center justify-center">
// //             {/* Vector design if needed */}
// //           </div>

// //           <img
// //             src={SideDesign}
// //             alt="Side Design"
// //             className="h-[150px] sm:h-[180px] md:h-[210px] lg:h-[250px] xl:h-[290px] 2xl:h-[330px] w-auto -translate-y-2 sm:-translate-y-4 md:-translate-y-6 lg:-translate-y-8"
// //           />
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// import CommonBg from "../../../assets/images/Common/CommonBg.png";
// import AboutGif from "../../../assets/images/Gif/AboutGif.gif";
// import SideDesign from "../../../assets/images/HomePageImages/AboutImages/SideDesign.png";

// import ScrollReveal from "../../../components/ScrollReveal";
// import ReusableSvg from "../../../components/ReusableSvg";
// import FallingLeaves from "../../../components/FallingLeaves";

// export default function About({
//   description,
//   baseOpacity,
//   enableBlur,
//   baseRotation,
//   blurStrength,
// }) {
//   return (
//     <section className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden py-10 sm:py-14 md:py-16 lg:py-20 flex items-center justify-center">
//       {/* Background */}
//       <img
//         src={CommonBg}
//         alt="Background"
//         className="absolute inset-0 h-full w-full object-cover -z-10"
//       />

//       {/* Falling Leaves Layer */}
//       <FallingLeaves count={12} />

//       {/* Main Container */}
//       <div className="container relative z-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8">
        
//         {/* Left Plant GIF */}
//         <div className="w-full md:w-[45%] lg:w-[40%] flex justify-center items-center">
//           <img
//             src={AboutGif}
//             alt="Mahavilvam Plant"
//             className="w-4/5 sm:w-3/4 md:w-full lg:w-[85%] max-w-sm sm:max-w-md md:max-w-none h-auto object-contain transform translate-y-0 md:-translate-y-6 lg:-translate-y-12 transition-all duration-300"
//           />
//         </div>

//         {/* Right Content Block */}
//         <div className="w-full md:w-[55%] lg:w-[60%] flex items-center justify-center lg:justify-end gap-3 sm:gap-5 md:gap-6 lg:gap-8">
          
//           {/* Text Container */}
//           <div className="w-full text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
//             <ScrollReveal
//               baseOpacity={baseOpacity}
//               enableBlur={enableBlur}
//               baseRotation={baseRotation}
//               blurStrength={blurStrength}
//               textClassName="!gradient-text font-primary leading-relaxed text-sm sm:text-base md:text-xl lg:text-2xl xl:text-3xl"
//             >
//               {description}
//             </ScrollReveal>

//             <div className="mt-4 sm:mt-6">
//               <ReusableSvg />
//             </div>
//           </div>

//           {/* Side Design (Hidden on extra-small mobile, responsive on sm and above) */}
//           <img
//             src={SideDesign}
//             alt="Side Design"
//             className="hidden sm:block shrink-0 h-[140px] sm:h-[180px] md:h-[210px] lg:h-[250px] xl:h-[290px] 2xl:h-[330px] w-auto object-contain transform translate-y-0 md:-translate-y-4"
//           />
//         </div>

//       </div>
//     </section>
//   );
// }

import CommonBg from "../../../assets/images/Common/CommonBg.png";
import AboutGif from "../../../assets/images/Gif/AboutGif.gif";
import SideDesign from "../../../assets/images/HomePageImages/AboutImages/SideDesign.png";

import ScrollReveal from "../../../components/ScrollReveal";
import ReusableSvg from "../../../components/ReusableSvg";
import FallingLeaves from "../../../components/FallingLeaves";

export default function About({
  description,
  baseOpacity,
  enableBlur,
  baseRotation,
  blurStrength,
}) {
  return (
    <section className="relative w-full min-h-screen bg-cover bg-center bg-no-repeat overflow-hidden py-8 sm:py-12 md:py-16 lg:py-20 flex items-center justify-center">
      {/* Background */}
      <img
        src={CommonBg}
        alt="Background"
        className="absolute inset-0 h-full w-full object-cover -z-10"
      />

      {/* Falling Leaves Layer */}
      <FallingLeaves count={12} />

      {/* Main Content Container */}
      <div className="container relative z-20 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 md:gap-10 lg:gap-12 px-4 sm:px-6 md:px-8">
        
        {/* Left Plant GIF Container */}
        <div className="w-full md:w-[42%] lg:w-[38%] flex justify-center items-center">
          <img
            src={AboutGif}
            alt="Mahavilvam Plant"
            className="w-3/4 sm:w-2/3 md:w-full lg:w-[85%] max-w-xs sm:max-w-sm md:max-w-none h-auto object-contain transition-all duration-300"
          />
        </div>

        {/* Right Content Block - Wrapped in relative container for precise side-design alignment */}
        <div className="relative w-full md:w-[58%] lg:w-[62%] 2xl:w-[90%] flex items-center justify-between gap-2 sm:gap-4 md:gap-6">
          
          {/* Main Text & Vector Divider Wrapper */}
          <div className="flex-1 text-center lg:text-left flex flex-col items-center lg:items-start justify-center">
            
            {/* Description Text */}
            <ScrollReveal
              baseOpacity={baseOpacity}
              enableBlur={enableBlur}
              baseRotation={baseRotation}
              blurStrength={blurStrength}
              textClassName="!gradient-text font-primary leading-relaxed text-sm xs:text-base md:text-lg lg:text-2xl xl:text-3xl 2xl:text-6xl"
            >
              {description}
            </ScrollReveal>

            {/* Bottom Ornamental Vector (Width Slightly Increased) */}
            <div className="mt-4 sm:mt-6 w-full flex justify-center lg:justify-start">
              <div className="w-70 xs:w-48 sm:w-60 md:w-80 lg:w-108 xl:w-190 h-auto max-h-16 overflow-hidden flex items-center justify-center">
                <ReusableSvg />
              </div>
            </div>
          </div>

          {/* Vertical Side Design - Stretches top-to-bottom relative to content */}
          <div className="shrink-0 flex items-center justify-center h-full self-stretch py-1">
            <img
              src={SideDesign}
              alt="Side Design"
              className="h-full max-h-48 xs:max-h-56 sm:max-h-64 md:max-h-72 lg:max-h-80 xl:max-h-96 w-auto max-w-[16px] xs:max-w-[20px] sm:max-w-[28px] md:max-w-[36px] lg:max-w-[44px] object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}