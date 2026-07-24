import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseOpacity = 0,
  baseRotation = 0,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";

    return text.split(/(\s+)/).map((word, index) => {
      if (/^\s+$/.test(word)) return word;

      return (
        <span
          key={index}
          className="word inline-block"
        >
          {word}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller =
      scrollContainerRef?.current || window;

    // Optional container rotation
    gsap.fromTo(
      el,
      {
        rotate: baseRotation,
        transformOrigin: "0% 50%",
      },
      {
        rotate: 0,
        ease: "none",
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top bottom",
          end: rotationEnd,
          scrub: true,
        },
      }
    );

    const words = el.querySelectorAll(".word");

    gsap.set(words, {
      opacity: baseOpacity,
      y: 30,
    });

    gsap.to(words, {
      opacity: 1,
      y: 0,
      stagger: 0.08,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        scroller,
        start: "top 80%",
        end: "bottom 60%",
        scrub: true,
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, [scrollContainerRef, baseOpacity, baseRotation, rotationEnd]);

  return (
    <div
      ref={containerRef}
      className={containerClassName}
    >
      <p className={`leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;