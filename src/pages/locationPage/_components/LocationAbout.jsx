import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { Icon } from "@iconify/react";

import "swiper/css";
import "swiper/css/navigation";

import ChennaiBg from "../../../assets/images/LocationImages/AboutLocationImages/ChennaiBg.png";
import SlideCount from "../../../assets/images/LocationImages/AboutLocationImages/SlideCount.png";

import Plant1 from "../../../assets/images/LocationImages/AboutLocationImages/Plant1.png";
import Plant2 from "../../../assets/images/LocationImages/AboutLocationImages/Plant2.png";
import Plant3 from "../../../assets/images/LocationImages/AboutLocationImages/Plant3.png";
import Plant4 from "../../../assets/images/LocationImages/AboutLocationImages/Plant4.png";

import FallingLeaves from "../../../components/FallingLeaves";
import ReusableSvg from "../../../components/ReusableSvg";

const locations = [
  {
    title: "CHENNAI",
    subtitle: "Nursery - 10,000 sft at Chennai",
    images: [Plant1, Plant2, Plant3, Plant4, Plant1, Plant2, Plant3, Plant4],
  },
  {
    title: "VELLORE",
    subtitle: "Nearly 2 acres in Vellore",
    images: [Plant4, Plant3, Plant2, Plant1],
  },
];

export default function LocationAbout() {
  const [activeSlides, setActiveSlides] = useState({});
  const [slidesPerView, setSlidesPerView] = useState(1);

  const prevRefs = useRef([]);
  const nextRefs = useRef([]);

  useEffect(() => {
    const updateSlides = () => {
      const width = window.innerWidth;

      if (width >= 1280) {
        setSlidesPerView(4);
      } else if (width >= 1024) {
        setSlidesPerView(3);
      } else if (width >= 640) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(1);
      }
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);

    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  return (
    <section className="relative py-6 md:py-10 overflow-hidden">
      <img
        src={ChennaiBg}
        alt="Background"
        className="absolute inset-0 w-full h-full object-cover -z-10"
      />

      {/* Falling Leaves Layer */}
      <FallingLeaves count={8} />

      <div className="container relative z-10">
        {locations.map((location, index) => (
          <div key={index} className="my-10">

            {/* Heading */}
            <div className="flex flex-col items-center text-center">
              <h2 className="heading text-yellow-primary">
                {location.title}
              </h2>

              <ReusableSvg />

              <p className="mt-4 md:mt-6 description text-yellow-secondary">
                {location.subtitle}
              </p>
            </div>

            <div className="mt-8 md:mt-10">

              <Swiper
                modules={[Navigation]}
                spaceBetween={16}
                slidesPerGroup={1}
                grabCursor
                loop={location.images.length > slidesPerView}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                  },
                  640: {
                    slidesPerView: 2,
                  },
                  768: {
                    slidesPerView: 2,
                  },
                  1024: {
                    slidesPerView: 3,
                  },
                  1280: {
                    slidesPerView: 4,
                  },
                }}
                navigation={{
                  prevEl: prevRefs.current[index],
                  nextEl: nextRefs.current[index],
                }}
                onBeforeInit={(swiper) => {
                  swiper.params.navigation.prevEl = prevRefs.current[index];
                  swiper.params.navigation.nextEl = nextRefs.current[index];
                }}
                onInit={(swiper) => {
                  swiper.navigation.init();
                  swiper.navigation.update();
                }}
                onSlideChange={(swiper) => {
                  setActiveSlides((prev) => ({
                    ...prev,
                    [index]: swiper.realIndex,
                  }));
                }}
              >
                {location.images.map((img, i) => (
                  <SwiperSlide key={i}>
                    <div className="overflow-hidden rounded-[24px] border border-yellow-secondary">
                      <img
                        src={img}
                        alt={`${location.title}-${i}`}
                        className="w-full h-[320px] object-cover transition-transform duration-300 hover:scale-105"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
              {/* Navigation */}
              {location.images.length > slidesPerView && (
                <div className="flex items-center justify-center gap-4 mt-4 md:mt-8">
                  {/* Previous */}
                  <button
                    ref={(el) => {
                      prevRefs.current[index] = el;
                    }}
                    className="p-2 rounded-full bg-[#E7C76B] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <Icon
                      icon="heroicons:chevron-left-20-solid"
                      className="text-black text-xl"
                    />
                  </button>

                  {/* Counter */}
                  <div className="relative px-6 py-1 rounded-full flex items-center justify-center overflow-hidden">
                    <img
                      src={SlideCount}
                      alt="Slide Count"
                      className="absolute inset-0 w-full h-full object-cover scale-125"
                    />

                    <span className="relative z-10 flex items-center justify-center w-full h-full text-black text-base font-semibold">
                      {(activeSlides[index] ?? 0) + 1}/{location.images.length}
                    </span>
                  </div>

                  {/* Next */}
                  <button
                    ref={(el) => {
                      nextRefs.current[index] = el;
                    }}
                    className="p-2 rounded-full bg-[#E7C76B] flex items-center justify-center transition-all duration-300 hover:scale-110 active:scale-95"
                  >
                    <Icon
                      icon="heroicons:chevron-right-20-solid"
                      className="text-black text-xl"
                    />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}