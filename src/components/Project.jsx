import React, { useState } from "react";
import ProjectDetails from "./ProjectDetails";

const Project = ({ title, tags, description, subDescription, image, href }) => {
    const [isHidden, setIsHidden] = useState(false);
  return (
    <div className="flex-wrap items-center justify-between py-10 space-y-14 sm:flex sm:space-y-0">
      <div>
        <p className="text-2xl">{title}</p>
        <div className="flex gap-5 mt-2 text-[#F719CC]">
          {tags.map((tag, index) => (
            <span key={index}>{tag.name}</span>
          ))}
        </div>
      </div>

      <button 
      onClick={() => setIsHidden(true)}
      className="flex items-center gap-1 cursor-pointer hover-animation">
        Read More
        <img src="assets/right-arrow.png" className="w-10" />
      </button>

      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full mt-4" />
      <div className="bg-gradient-to-r from-transparent via-neutral-700 to-transparent h-[1px] w-full" />
      
  
      
    {isHidden && (
    <ProjectDetails 
        title={title}
        description={description}
        subDescription={subDescription}
        image={image} 
        className="w-full max-w-[400px] h-auto object-contain mx-auto rounded-lg"
        tags={tags}
        href={href}
        closeModel={() => setIsHidden(false)}
    />
    )}
    </div>
  );
};

export default Project;