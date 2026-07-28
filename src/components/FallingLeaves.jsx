import { useMemo } from "react";
import leafImage from "../assets/images/Common/leaf.png"; // Adjust path to your leaf image

const FallingLeaves = ({ count = 16 }) => {
  const leaves = useMemo(() => {
    // Width of each grid column for 12 leaves (~8.33% per leaf lane)
    const laneWidth = 100 / count;

    return Array.from({ length: count }).map((_, i) => {
      // Calculate a randomized left offset strictly within its assigned lane
      // Example: Leaf 0 is between 0% - 8.3%, Leaf 1 is between 8.3% - 16.6%, etc.
      const laneStart = i * laneWidth;
      const randomOffset = Math.random() * (laneWidth - 2); // Avoid edge overflow
      const left = laneStart + randomOffset;

      // Random fall speed (3s to 5.5s)
      const duration = 3 + Math.random() * 2.5;

      // Staggered delays so they don't fall in a line
      const delay = Math.random() * 5;

      // Random sizes (25px to 50px)
      const size = 25 + Math.random() * 25;

      // Random starting vertical positions (some start slightly higher/lower off-screen)
      const startY = -(40 + Math.random() * 60);

      return {
        id: i,
        style: {
          left: `${left}%`,
          top: `${startY}px`,
          width: `${size}px`,
          height: `${size}px`,
          backgroundImage: `url(${leafImage})`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        },
      };
    });
  }, [count]);

  return (
    <div className="falling-leaves-container">
      {leaves.map((leaf) => (
        <div key={leaf.id} className="falling-leaf" style={leaf.style} />
      ))}
    </div>
  );
};

export default FallingLeaves;