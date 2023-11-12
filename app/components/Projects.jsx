import React from "react";
import ProjectItem from "./ProjectItem";
import property from "@/public/assets/projects/property.jpg";
import crypto from "@/public/assets/projects/crypto.jpg";
import captur from "@/public/assets/projects/captur.jpg";

const Projects = () => {
  return (
    <div id="projects" className="w-full h-auto scroll-m-20">
      <div className="max-w-[1240px] mx-auto py-8 px-2">
        <p className="text-indigo-500 text-xl uppercase tracking-widest">
          projects
        </p>
        <h2 className="py-4 text-3xl">What I Have Build.</h2>
        <div className="grid md:grid-cols-2 gap-4">
          <ProjectItem
            imageUrl={property}
            projectName="Property Finder"
            technology="React JS"
            github="url"
            projectLink="aa"
          />
          <ProjectItem
            imageUrl={crypto}
            projectName="Crypto"
            technology="Next JS"
            github="url"
            projectLink="aa"
          />
          <ProjectItem
            imageUrl={captur}
            projectName="Captur App"
            technology="Next JS"
            github="https://github.com/rajky9/captur-app"
            projectLink="https://captur-app.vercel.app/"
          />
          <ProjectItem
            imageUrl={crypto}
            projectName="Crypto"
            technology="Next JS"
            github="url"
            projectLink="aa"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
