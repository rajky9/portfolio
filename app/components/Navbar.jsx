"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
const navItems = [
  {
    name: "Home",
    link: "/#home",
  },
  {
    name: "About",
    link: "/#about",
  },
  {
    name: "Skills",
    link: "/#skills",
  },
  {
    name: "Projects",
    link: "/#projects",
  },
  {
    name: "Contact",
    link: "/#contact",
  },
];

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState("");

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow("shadow-lg");
      } else {
        setShadow("");
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className={`w-full h-20 ${shadow} bg-white fixed top-0 left-0 z-[101] ease-in duration-300`}>
      <div className="h-full flex items-center justify-between max-w-[1240px] mx-auto px-2 md:px-6 lg:px-8">
        <h2 className="px-2 md:p-0 text-2xl cursor-pointer">DK.</h2>
        <ul className="hidden md:flex items-center uppercase">
          {navItems.map((item, index) => {
            return (
              <li key={index}>
                <Link href={item.link} className="p-4 hover:border-b">
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
        <div onClick={handleNav} className="md:hidden p-2 cursor-pointer">
          <AiOutlineMenu size={25} />
        </div>
      </div>
      {/* MOBILE MENU */}
      <div className="">
        {/* OVERLAY */}
        <div
          className={
            nav
              ? `md:hidden w-full h-screen top-0 left-0 bg-black/70 fixed duration-300`
              : ""
          }
        >
          <div
            className={
              nav
                ? `fixed top-0 left-0 w-[75%] sm:w-[450px] md:w-[450px] h-screen bg-[#ecf0f3] p-8 duration-300 ease-in`
                : `fixed top-0 left-[-100%] w-[75%] sm:w-[450px] md:w-[450px] h-screen bg-[#ecf0f3] p-8 duration-300 ease-in`
            }
          >
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-3xl">DK.</h2>
              </div>
              <div
                onClick={handleNav}
                className="rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer"
              >
                <AiOutlineClose size={20} />
              </div>
            </div>
            <div className="border-b border-gray-400 my-4">
              <p className="py-4">Let's build something legendary together</p>
            </div>
            <div>
              <ul className="uppercase">
                {navItems.map((item, index) => {
                  return (
                    <li key={index} className="text-sm">
                      <Link
                        href={item.link}
                        onClick={handleNav}
                        className="py-2 w-full block hover:bg-gray-300"
                      >
                        {item.name}
                      </Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-20">
                <p className="uppercase text-indigo-600">Let's connect</p>
                <div className="flex justify-between w-[100%] sm:w-[80%] py-6 duration-200">
                  <div className="p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 rounded-full duration-200">
                    <FaLinkedinIn size={25} />
                  </div>

                  <div className="p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 rounded-full duration-200">
                    <FaGithub size={25} />
                  </div>

                  <div className="p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 rounded-full duration-200">
                    {" "}
                    <FaFacebook size={25} />
                  </div>

                  <div className="p-3 shadow-lg shadow-gray-400 cursor-pointer hover:scale-105 rounded-full duration-200">
                    <FaEnvelope size={25} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
