import { useEffect, useRef, useMemo } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollReveal = ({
  children,
  scrollContainerRef,
  baseRotation = 0,
  containerClassName = "",
  textClassName = "",
  rotationEnd = "bottom bottom",
}) => {
  const containerRef = useRef(null);

  // Split text into word spans
  const splitText = useMemo(() => {
    const text = typeof children === "string" ? children : "";

    return text.split(/(\s+)/).map((part, index) => {
      if (/^\s+$/.test(part)) return part;

      return (
        <span
          key={index}
          className="word inline-block mr-[0.2em]"
          style={{
            filter: "none",
            WebkitFilter: "none",
          }}
        >
          {part}
        </span>
      );
    });
  }, [children]);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const scroller = scrollContainerRef?.current || window;

    // Scope GSAP triggers to this component instance so stacked sections don't conflict
    const ctx = gsap.context(() => {
      // Container rotation animation (if configured)
      if (baseRotation !== 0) {
        gsap.fromTo(
          el,
          { rotate: baseRotation, transformOrigin: "0% 50%" },
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
      }

      const words = el.querySelectorAll(".word");

      if (words.length === 0) return;

      // Make all words COMPLETELY INVISIBLE initially
      gsap.set(words, {
        opacity: 0,
        filter: "none",
      });

      // Reveal timeline triggered by scrolling
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: el,
          scroller,
          start: "top 80%", // Reveal starts when top of text hits 80% viewport height
          end: "bottom 35%",   // Completes when bottom hits 35% viewport height
          scrub: 0.1,         // Smooth tight snapping tied to scroll movement
          invalidateOnRefresh: true,
        },
      });

      // Animate each word to full visibility in sequence
      words.forEach((word) => {
        tl.to(
          word,
          {
            opacity: 1,
            duration: 0.05,
            ease: "none",
          },
          ">+0.04"
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, [children, scrollContainerRef, baseRotation, rotationEnd]);

  return (
    <div ref={containerRef} className={`description ${containerClassName}`}>
      <p className={`leading-[1.5] font-semibold ${textClassName}`}>
        {splitText}
      </p>
    </div>
  );
};

export default ScrollReveal;