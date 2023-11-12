import Image from "next/image";
import React from "react";
import contact from "@/public/assets/contact.jpg";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";

const Contact = () => {
  return (
    <div id="contact" className="w-full lg:h-screen scroll-m-24">
      <div className="max-w-[1240px] m-auto p-2">
        <p className="text-indigo-500 uppercase tracking-widest text-xl">
          contact
        </p>
        <h2 className="text-4xl py-4">Whisper Me</h2>
        <div className="grid lg:grid-cols-5 gap-8">
          {/* LEFT */}
          <div className="w-full h-full lg:col-span-2 shadow-xl  shadow-gray-400 rounded-xl p-4">
            <div className="lg:p-4 h-full">
              <div className="">
                <Image
                  src={contact}
                  alt='/'
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2 text-medium text-xl">Kristián Demko</h2>
                <p>Front-End Developer</p>
                <p className="py-4">
                  I am available for freelance or full-time positions. Contact
                  me and let&apos;s talk.
                </p>
              </div>
              {/* CONTACT */}
              <div className="flex flex-col justify-center gap-y-2 my-2">
                <div className="flex items-center gap-2 font-medium">
                  <AiFillPhone size={20} />
                  <p>+421 911 314 142</p>
                </div>
                <div className="flex items-center gap-2 font-medium">
                  <AiFillMail size={20} />
                  <p>demkokristian@gmail.com</p>
                </div>
              </div>
              {/* SOCIALS*/}
              <div className="pb-4">
                <p className="uppercase pt-8 pb-2 text-indigo-500">
                  connect with me
                </p>
                <div className="flex justify-between items-center">
                  <Link href="/" target="_blank">
                    <div className="p-6 shadow-lg text-xl shadow-gray-400 hover:scale-110 rounded-full duration-300 ease-in">
                      <FaLinkedinIn size={20} />
                    </div>
                  </Link>
                  <Link href="https://github.com/rajky9" target="_blank">
                    <div className="p-6  shadow-lg shadow-gray-400 cursor-pointer hover:scale-110  rounded-full duration-300 ease-in">
                      <FaGithub size={20} />
                    </div>
                  </Link>

                  <Link href="https://www.facebook.com" target="_blank">
                    <div className="p-6 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110  rounded-full duration-300 ease-in">
                      <FaFacebook size={20} />
                    </div>
                  </Link>

                  <Link href="/" target="_blank">
                    <div className="p-6 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110  rounded-full duration-300 ease-in">
                      <FaEnvelope size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="lg:col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4 w-full h-auto">
            <div className="p-4">
              <form>
                {/* NAME & PHONE NUMBER */}
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  {/* NAME */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">NAME</label>
                    <input
                      type="text"
                      className="p-2 border-2 w-full rounded-lg border-gray-500"
                    />
                  </div>
                  {/* PHONE NUMBER */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      PHONE NUMBER
                    </label>
                    <input
                      type="text"
                      className="p-2 border-2 w-full rounded-lg border-gray-500"
                    />
                  </div>
                </div>
                {/* EMAIL */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email</label>
                  <input
                    type="email"
                    className="p-2 border-2 w-full rounded-lg border-gray-500"
                  />
                </div>
                {/* SUBJECT */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject</label>
                  <input
                    type="text"
                    className="p-2 border-2 w-full rounded-lg border-gray-500"
                  />
                </div>
                {/* MESSAGE */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message</label>
                  <textarea
                    rows="10"
                    className="p-2 border-2 w-full rounded-lg border-gray-500"
                  ></textarea>
                </div>
                {/* SEND BUTTON */}
                <button className="w-full mt-6 font-medium text-gray-100 uppercase bg-gradient-to-r from-indigo-600 to-indigo-400 p-4 rounded-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center py-8">
          <Link href="/#home">
            <div className="p-4 shadow-xl shadow-gray-400 rounded-full hover:scale-110 ease-in duration-200">
              <HiOutlineChevronDoubleUp size={25} className="text-indigo-500" />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
