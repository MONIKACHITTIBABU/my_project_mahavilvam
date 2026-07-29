import { useMemo } from "react";
import leafImage from "../assets/images/Common/leaf.png"; // Adjust path to your leaf image

const FallingLeaves = ({
  count = 16,
  minDuration = 12,
  maxDuration = 22,
}) => {
  const leaves = useMemo(() => {
    const laneWidth = 100 / count;

    return Array.from({ length: count }).map((_, i) => {
      const laneStart = i * laneWidth;
      const randomOffset = Math.random() * (laneWidth - 2);
      const left = laneStart + randomOffset;

      const duration =
        minDuration + Math.random() * (maxDuration - minDuration);

      // Negative delay starts each leaf mid-fall so none cluster at the top on load
      const progress = Math.random();
      const delay = -(progress * duration);

      const size = 28 + Math.random() * 24;

      const startY = -(40 + Math.random() * 60);

      return {
        id: i,
        style: {
          left: `${left}%`,
          top: startY,
          "--start-y": `${startY}px`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundImage: `url(${leafImage})`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        },
      };
    });
  }, [count, minDuration, maxDuration]);

  return (
    <div className="falling-leaves-container">
      {leaves.map((leaf) => (
        <div key={leaf.id} className="falling-leaf" style={leaf.style} />
      ))}
    </div>
  );
};

export default FallingLeaves;