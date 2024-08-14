import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProjectItem = ({
  imageUrl,
  projectName,
  technology,
  github,
  projectLink,
}) => {
  return (
    <div className="rounded-xl shadow-xl shadow-gray-400 hover:bg-gradient-to-r from-indigo-800 to-indigo-500 p-4 relative group ">
      <Image
        className="rounded-lg group-hover:opacity-10 w-full h-full object-cover"
        layout=""
        alt="/"
        src={imageUrl}
      />
      <div className="hidden group-hover:block text-center absolute top-[50%] left-[50%]  translate-x-[-50%] translate-y-[-50%]">
        <h3 className="text-2xl text-white tracking-wide">{projectName}</h3>
        <p className="p-2 font-bold text-black">{technology}</p>

        <Link target="_blank" href={github}>
          <p className="p-2 bg-gray-100 rounded-md font-bold text-sm border mt-1 w-[150px] mx-auto hover:bg-gray-300">
            Preview code
          </p>
        </Link>
        {projectLink && (
          <Link href={projectLink} target="_blank">
            <p className="p-2 bg-black text-white rounded-md font-bold text-sm border-black mt-3 w-[150px] mx-auto hover:bg-gray-800">
              Visit page
            </p>
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
