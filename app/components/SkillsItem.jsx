import React from "react";
import Image from "next/image";

const SkillsItem = ({ src, width, height, alt, text }) => {
  return (
    <div className="p-6 rounded-xl shadow-lg hover:scale-105 ease-in duration-300">
      <div className="grid grid-cols-2 gap-6 items-center justify-center">
        <div className="m-auto">
          <Image src={src} width={width} height={height} alt={alt} />
        </div>
        <div className="flex flex-col justify-center items-center">
          <p className="font-bold text-xl">{text}</p>
        </div>
      </div>
    </div>
  );
};

export default SkillsItem;
