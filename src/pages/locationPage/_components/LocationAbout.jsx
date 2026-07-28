import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";

import ChennaiBg from "../../../assets/images/LocationImages/AboutLocationImages/ChennaiBg.png";
import VectorLine from "../../../assets/images/LocationImages/AboutLocationImages/VectorLine.png";

import Plant1 from "../../../assets/images/LocationImages/AboutLocationImages/Plant1.png";
import Plant2 from "../../../assets/images/LocationImages/AboutLocationImages/Plant2.png";
import Plant3 from "../../../assets/images/LocationImages/AboutLocationImages/Plant3.png";
import Plant4 from "../../../assets/images/LocationImages/AboutLocationImages/Plant4.png";
import SlideCount from "../../../assets/images/LocationImages/AboutLocationImages/SlideCount.png";

import FallingLeaves from "../../../components/FallingLeaves";

const locations = [
  {
    title: "CHENNAI",
    subtitle: "Nursery - 10,000 sft at Chennai",
    images: [Plant1, Plant2, Plant3, Plant4],
  },
  {
    title: "VELLORE",
    subtitle: "Nearly 2 acres in Vellore",
    images: [Plant4, Plant3, Plant2, Plant1],
  },
];

export default function LocationAbout() {
  const [activeSlides, setActiveSlides] = useState({});

  return (
    <section className="relative py-6 md:py-10 overflow-hidden">
      {/* Background Image */}
      <img
        src={ChennaiBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Falling Leaves Layer */}
      <FallingLeaves count={12} />

      <div className="container relative z-10">
        {locations.map((location, index) => (
          <div key={index} className="my-10">

            {/* Heading */}
            <div className="flex flex-col items-center text-center">
              <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[72px] font-secondary uppercase text-yellow-primary">
                {location.title}
              </h2>

              <img
                src={VectorLine}
                alt="Vector Line"
                className="w-64 sm:w-72 md:w-80 lg:w-96 xl:w-[420px] mt-2 object-contain"
              />
              
              <p className="mt-4 md:mt-6 text-yellow-secondary text-xl sm:text-xl md:text-2xl lg:text-3xl font-semibold">
                {location.subtitle}
              </p>
            </div>

            {/* MOBILE SLIDER */}
            <div className="block md:hidden mt-8">
              <Swiper
                modules={[Navigation]}
                slidesPerView={1}
                loop={true}
                spaceBetween={20}
                navigation={{
                  prevEl: `.prev-${index}`,
                  nextEl: `.next-${index}`,
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = `.prev-${index}`;
                  swiper.params.navigation.nextEl = `.next-${index}`;
                }}
                onSwiper={(swiper) => {
                  setTimeout(() => {
                    swiper.navigation.destroy();
                    swiper.navigation.init();
                    swiper.navigation.update();
                  });

                  setActiveSlides((prev) => ({
                    ...prev,
                    [index]: swiper.realIndex,
                  }));
                }}
                onSlideChange={(swiper) =>
                  setActiveSlides((prev) => ({
                    ...prev,
                    [index]: swiper.realIndex,
                  }))
                }
              >
                {location.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <img
                      src={img}
                      alt={`${location.title} ${i + 1}`}
                      className="w-full h-[380px] rounded-[32px] object-cover border border-yellow-secondary"
                    />
                  </SwiperSlide>
                ))}
              </Swiper>

              {/* Navigation */}
              <div className="flex items-center justify-center gap-4 mt-6">

                {/* Previous Button */}
                <button
                  className={`prev-${index} w-10 h-10 rounded-full bg-[#E7C76B] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95`}
                >
                  <Icon
                    icon="heroicons:chevron-left-20-solid"
                    className="text-black text-[18px]"
                  />
                </button>

                {/* Counter */}
                <div className="relative w-[110px] h-[44px] flex items-center justify-center">
                  <img
                    src={SlideCount}
                    alt="Slide Count"
                    className="absolute inset-0 w-full h-full object-contain"
                  />

                  <span className="relative z-10 flex items-center justify-center w-full h-full text-black text-base font-semibold">
                    {(activeSlides[index] ?? 0) + 1}/{location.images.length}
                  </span>
                </div>

                {/* Next Button */}
                <button
                  className={`next-${index} w-10 h-10 rounded-full bg-[#E7C76B] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95`}
                >
                  <Icon
                    icon="heroicons:chevron-right-20-solid"
                    className="text-black text-[18px]"
                  />
                </button>

              </div>
            </div>

            {/* TABLET & DESKTOP GRID */}
            <div className="hidden md:block mt-8 md:mt-10">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-4">
                {location.images.map((img, i) => (
                  <div
                    key={i}
                    className="overflow-hidden border border-yellow-secondary"
                  >
                    <img
                      src={img}
                      alt={`${location.title} ${i + 1}`}
                      className="w-full h-40 sm:h-52 md:h-64 lg:h-72 xl:h-[300px] object-cover transition-transform duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>
    </section>
  );
}