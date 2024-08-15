import Link from "next/link";
import React from "react";
import { FaLinkedinIn, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";

const Main = () => {
  return (
    <div id="home" className="w-full h-screen text-center z-10">
      <div className="max-w-[1240px] mx-auto flex flex-col items-center justify-center h-full w-full">
        <h1 className="py-3 text-gray-700">
          Hi, I&#39;m <span className="text-indigo-600">Kristian</span>
        </h1>
        <h1 className="text-gray-700 py-2">A Full-Stack Developer</h1>
        <p className="text-lg text-gray-600 mt-3 shadow-sm  tracking-widest">
          LET&#39;S BUILD SOMETHING TOGETHER
        </p>
        <p className="max-w-[400px] text-sm w-full leading-6 py-4 text-gray-600">
          I’m focused on building responsive full-stack applications.
        </p>
        <div className="flex md:gap-6 gap-3 mt-2">
          <div className="p-3 md:scale-125 scale-110 shadow-lg shadow-gray-400 cursor-pointer hover:scale-90 md:hover:scale-105 rounded-full duration-200">
            <FaGithub size={25} />
          </div>
          <div className="p-3 md:scale-125 scale-110 shadow-lg shadow-gray-400 cursor-pointer hover:scale-90 md:hover:scale-105 rounded-full duration-200">
            <Link href="https://www.facebook.com/kiko.demko">
              <FaFacebook size={25} />
            </Link>
          </div>
          <div className="p-3 md:scale-125 scale-110 shadow-lg shadow-gray-400 cursor-pointer hover:scale-90 md:hover:scale-105 rounded-full duration-200">
            <Link href="mailto:demkokristian@gmail.com" >
              <FaEnvelope size={25} />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
