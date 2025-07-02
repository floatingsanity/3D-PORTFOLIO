import { motion } from "motion/react";

const ProjectDetails = ({
  title,
  description,
  subDescription,
  image,
  tags,
  href,
  closeModel
}) => {
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4 pb-4 backdrop-blur-sm overflow-y-auto">
      <motion.div
        className="relative w-full max-w-4xl border shadow-sm rounded-2xl bg-gradient-to-l from-midnight to-navy border-white/10 overflow-hidden"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
      >
        <button
          onClick={closeModel}
          className="absolute p-2 rounded-sm top-5 right-5 bg-midnight hover:bg-gray-500 z-10"
        >
          <img src="assets/close.png" className="w-6 h-6" alt="Close" />
        </button>

        {image && (
          <div className="w-full h-[300px] md:h-[400px] lg:h-[450px] overflow-hidden">
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover object-contain mx-auto rounded-t-2xl"
            />
          </div>
        )}

        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <h5 className="mb-2 text-2xl font-bold text-white">{title}</h5>
          <p className="mb-3 font-normal text-neutral-400">{description}</p>

          {subDescription.map((subDesc, index) => (
            <p key={index} className="mb-3 font-normal text-neutral-400">
              {subDesc}
            </p>
          ))}

          <div className="flex flex-wrap items-center justify-between mt-4 gap-2">
            <div className="flex flex-wrap gap-3">
              {tags.map((tag) => (
                <span
                  key={tag.id}
                  className="px-3 py-1 text-sm font-medium text-[#F719CC] bg-white/5 rounded hover:scale-105 transition-transform"
                >
                  {tag.name}
                </span>
              ))}
            </div>
            <a
              className="inline-flex items-center gap-1 font-medium cursor-pointer hover-animation"
              href={href}
              target="_blank"
              rel="noopener noreferrer"
            >
              View Project
              <img src="assets/arrow-up.png" alt="arrow" className="size-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default ProjectDetails;