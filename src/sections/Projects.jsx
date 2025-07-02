import Project from "../components/Project"; 
import { myProjects } from "../constants";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { Particles } from "../components/Particles";

const Projects = () => {
  return (
    <section id="projects" className="relative c-space section-spacing z-0">
       <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color={"#ffffff"}
        refresh
      />
      <div className="grid grid-cols-1 gap-4 md:grid-cols-6 md:auto-rows-auto mt-12 w-full">
        <div className="col-span-full">
          <h2 className="ttext-heading text-3xl font-bold text-center mb-6 z-30 relative">
            My Selected Projects
          </h2>
        </div>

        <div className="col-span-full flex flex-col gap-8">
          {myProjects.map((project) => (
            <Project key={project.id} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;