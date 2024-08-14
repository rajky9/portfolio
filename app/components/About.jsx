import React from "react";
import person from "@/public/assets/person.png";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  return (
    <div id="about" className="w-full md:h-screen flex items-center">
      <div className="max-w-[1240px] mx-auto md:grid grid-cols-3 gap-8 p-2">
        <div className="col-span-2">
          <p className="text-indigo-500 text-xl uppercase tracking-widest">
            ABOUT
          </p>
          <h2 className="py-4 text-3xl">Who I Am</h2>
          <p className="text-gray-600 py-2">
            Hello, My name is Kristian. I am a fresh graduate of a 2nd degree
            college.
          </p>
          <p className="text-gray-600 py-2">
            During my studies at school, I went through a lot of programming
            languages ​​such as C#, Java, PHP. I chose the path of web
            applications.
          </p>
          <p className="text-gray-600 py-2">
            First I started with Html, CSS and PHP. Later, I learned the basics
            of JS and started using ReactJS, NextJS frameworks.
          </p>
          <p className="text-gray-600 py-2">
            We also learned database technologies at school. Specifically, it
            was Oracle technology. However, I use PostgreSQL in my projects.
          </p>
          <p className="underline text-gray-600 cursor-pointer py-2">
            <Link href="/#projects">Check out some of my latest projects</Link>
          </p>
        </div>
        <div className="flex w-full h-auto m-auto items-center justify-center p-3 rounded-lg shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 duration-150 ease-in">
          <Image className="rounded-xl" src={person} alt="/" />
        </div>
      </div>
    </div>
  );
};

export default About;
