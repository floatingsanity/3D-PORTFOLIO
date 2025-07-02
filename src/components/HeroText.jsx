"use client";
import { FlipWords } from "./FlipWords";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const HeroText = () => {
  const [startFlipping, setStartFlipping] = useState(false);

  // Delay FlipWords start after 2.5s
  useEffect(() => {
    const timer = setTimeout(() => {
      setStartFlipping(true);
    }, 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="z-10 mt-20 text-center md:mt-40 md:text-left rounded-3xl">
      {/* Desktop View */}
     <div className="py-16" />



      <div className="flex-col hidden md:flex space-y-4">
        <motion.h1
          className="text-4xl font-medium text-neutral-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Hi I'm Feda,
        </motion.h1>
        <br></br>

        <motion.p
          className="text-5xl font-medium text-neutral-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          A Creative Developer Immersed in Crafting
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          {startFlipping && (
            <FlipWords
              words={[
                "Code",
                "Emotion",
                "Interfaces",
                "User Experience",
                "Games",
                "Art",
                "Sound",
              ]}
              className="text-6xl font-medium text-neutral-300"
            />
          )}
        </motion.div>
      </div>

      {/* Mobile View */}
      <div className="flex flex-col space-y-4 md:hidden mt-10 items-center">
        <motion.p
          className="text-3xl font-medium text-neutral-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1.5 }}
        >
          Hi I'm Feda
        </motion.p>

        <motion.p
          className="text-3xl font-medium text-neutral-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1.5 }}
        >
          I Craft
        </motion.p>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 1.5 }}
        >
          {startFlipping && (
            <FlipWords
              words={[
                "Code",
                "Emotion",
                "Interfaces",
                "User Experience",
                "Games",
                "Art",
                "Sound",
              ]}
              className="text-4xl font-medium text-neutral-300"
            />
          )}
        </motion.div>
      </div>
    </div>
  );
};

export default HeroText;