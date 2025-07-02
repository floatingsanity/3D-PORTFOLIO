import React, { useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";

const ParallaxBackground = () => {
  const { scrollYProgress } = useScroll();

  // Scroll-driven horizontal motion
  const scrollX1 = useSpring(useTransform(scrollYProgress, [0, 1], [-100, 100]), {
    stiffness: 200,
    damping: 8,
  });

  const scrollX2 = useSpring(useTransform(scrollYProgress, [0, 1], [80, -80]), {
    stiffness: 180,
    damping: 7,
  });

  // Autonomous subtle wobble
  const autoX1 = useMotionValue(0);
  const autoX2 = useMotionValue(0);

  useEffect(() => {
    const interval = setInterval(() => {
      const random1 = Math.random() * 6 - 3; // between -3 and 3
      const random2 = Math.random() * 8 - 4; // between -4 and 4
      autoX1.set(random1);
      autoX2.set(random2);
    }, 100); // update every 100ms

    return () => clearInterval(interval);
  }, [autoX1, autoX2]);

  return (
    
    <section className="absolute inset-0 bg-black/40 z-[-1]">
      
      <div className="relative h-screen overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 w-full h-screen -z-50 blur-md opacity-50"
          style={{
            backgroundImage: "url('assets/FloatingSanity.jpeg')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "auto 100%",
          }}
        />

        {/* Glitch Layer 1 */}
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen pointer-events-none mix-blend-lighten opacity-30 blur-sm"
          style={{
            backgroundImage: "url('assets/glitches.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            x: useTransform([scrollX1, autoX1], ([sx, ax]) => sx + ax),
          }}
        />

        {/* Glitch Layer 2 */}
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen pointer-events-none mix-blend-screen opacity-20 blur-sm"
          style={{
            backgroundImage: "url('assets/glitches.png')",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            x: useTransform([scrollX2, autoX2], ([sx, ax]) => sx + ax),
          }}
        />
      </div>
    </section>
  );
};

export default ParallaxBackground;