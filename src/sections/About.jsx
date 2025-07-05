"use client";

import { FlipWords } from "../components/FlipWords";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Globe } from "../components/globe";
import { Particles } from "../components/Particles";

const About = () => {
  const [startFlipping, setStartFlipping] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setStartFlipping(true);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section id="about" className="c-space section-spacing relative z-0">
       <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="col-span-full">
          <h2 className="text-heading text-3xl font-bold text-center mb-6 z-30 relative">
            About Me
          </h2>
        </div>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-[18rem] mt-12">

        {/* Grid 1 */}
        <div className="flex items-end justify-center grid-default-color grid-1 relative">
          <div className="w-full h-full rounded-xl border-[2px] border-indigo-500 shadow-[0_0_30px_#7f5af0] overflow-hidden">
            <img
              src="assets/Feda.jpeg"
              className="w-full h-full object-cover sm:object-center"
              alt="Feda"
            />
          </div>
        </div>

        {/* Grid 2 */}
        <div className="grid-default-color grid-2 relative">
          <img
            src="assets/coding-pov.png"
            className="absolute z-0 opacity-80 brightness-75 scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="Coding POV"
          />
          <div className="z-20 relative bg-black/40 backdrop-blur-sm p-4 rounded-xl mt-12 shadow-lg ring-1 ring-white/10">
            <p className="headtext">This is Feda Almodhi</p>
            <p className="subtext">
              A creative developer and designer blending code, emotion, and experience.  
              I craft interactive stories, intuitive interfaces, and immersive digital worlds  
              across web, games, and multimedia.
            </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>

        {/* Grid 3 */}
        <div className="grid-default-color grid-3 relative p-6 overflow-hidden">
        {/* Background image with dark overlay */}
        <img
            src="assets/computing.png"
            alt="Computing Background"
            className="absolute  blur-xxs inset-0 w-full h-full object-cover brightness-50"
        />

         <div className="z-20 relative bg-black/40 backdrop-blur-sm p-4 rounded-xl mt-12 shadow-lg ring-1 ring-white/10 w-full max-w-[90vw] md:max-w-[500px] h-[135px] mx-auto ">
            <h2 className="headtext mb-4">Core Skills</h2>

            {startFlipping && (
        <FlipWords
        words={[
            "Java  HTML/CSS  JavaScript  Python  Git  SQL\n\n",
            "User Experience  Figma  User Research  Interaction Design  Product Management\n\n",
            "Creative Coding  Game Design  Gameplay Systems  Interaction Scripting  Godot  Unity\n\n",
            "Photoshop  Illustrator  Blender  Spline\n\n",
            "Database Design  Information Architecture  Front-End Integration  Documentation",
        ]}
        className="subtext text-neutral-300 whitespace-pre-line " 
        interval={4000}
        useNeon={false} 
        />
        )}
        </div>
        </div>

        {/* Grid 4 */}
        <div className="grid-special-color grid-4 relative">
        <div className="z-10 w-[50%] z-20 relative bg-black/40 backdrop-blur-sm p-4 rounded-xl mt-12 shadow-lg ring-1 ring-white/10 ">
            <p className="subtext">
        Based in The United States, and happily collaborating with clients around the globe.
            </p>
        </div>

        <figure className="absolute left-[30%] top-[-10%] absolute  blur-xxs inset-0 w-full h-full object-cover brightness-70">
            <Globe/>
        </figure>
        </div>

      {/* Grid 5 */}
      <div className="grid-default-color grid-2 relative">
          <img
            src="assets/floating.jpeg"
            className="absolute z-0 opacity-80 brightness-75 blur-xs object-cover  scale-[1.75] -right-[5rem] -top-[1rem] md:scale-[3] md:left-50 md:inset-y-10 lg:scale-[2.5]"
            alt="POV"
          />
          <div className="z-20 relative bg-black/40 backdrop-blur-sm p-4 rounded-xl mt-12 shadow-lg ring-1 ring-white/10">
          <p className="subtext">
           I craft with intention, turning code  
            into connection, sound into sensation, and design into something you remember.  
            I blend emotion, memory, and motion to build interactive spaces that echo  
            real feelings.
          </p>
          </div>
          <div className="absolute inset-x-0 pointer-events-none -bottom-4 h-1/2 sm:h-1/3 bg-gradient-to-t from-indigo"></div>
        </div>
      </div>
    </section>
  );
};

export default About;