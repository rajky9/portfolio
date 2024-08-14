"use client";
import Image from "next/image";
import contactimg from "@/public/assets/contact.jpg";
import { AiFillPhone, AiFillMail } from "react-icons/ai";
import { FaLinkedinIn, FaGithub, FaFacebook, FaEnvelope } from "react-icons/fa";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";
import Link from "next/link";
import { useState } from "react";
import { contact_schema } from "../libs/models";
import { sendEmail } from "../libs/mail";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    message: "",
  });

  const onChangeContact = (e) => {
    console.log(errors);
    if (errors[e.target.name] !== "") {
      setErrors({
        ...errors,
        [e.target.name]: "",
      });
    }
    setContact((prevState) => {
      return { ...prevState, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    setIsLoading(true);
    e.preventDefault();
    const { error } = contact_schema.validate(contact, {
      abortEarly: false,
    });
    if (error) {
      const validationErrors = error.details.reduce((acc, curr) => {
        console.log(curr);
        acc[curr.path[0]] = curr.message;
        return acc;
      }, {});
      setErrors(validationErrors);
      setIsLoading(false);
      return;
    }

    try {
      await sendEmail(contact)
    } catch (error) {
      alert("Something went wrong!")  
    } finally{
      setIsLoading(false)
    }

  };

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
                  src={contactimg}
                  alt="/"
                  className="rounded-xl hover:scale-105 ease-in duration-300"
                />
              </div>
              <div>
                <h2 className="py-2 text-medium text-xl">Kristián Demko</h2>
                <p>Full-stack Developer</p>
                <p className="py-4">
                  I am available for part-time or full-time positions. Contact
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
                <p className="uppercase pt-8 pb-4 text-indigo-500">
                  connect with me
                </p>
                <div className="flex gap-x-4 items-center">
 
                  <Link href="https://github.com/rajky9" target="_blank">
                    <div className="p-4  shadow-lg shadow-gray-400 cursor-pointer hover:scale-110  rounded-full duration-300 ease-in">
                      <FaGithub size={20} />
                    </div>
                  </Link>

                  <Link href="https://www.facebook.com/kiko.demko" target="_blank">
                    <div className="p-4 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110  rounded-full duration-300 ease-in">
                      <FaFacebook size={20} />
                    </div>
                  </Link>
                   <Link href="mailto:demkokristian@gmail.com">
                    <div className="p-4 shadow-lg shadow-gray-400 cursor-pointer hover:scale-110  rounded-full duration-300 ease-in">
                      <FaEnvelope size={20} />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          {/* RIGHT */}
          <div className="lg:col-span-3 shadow-xl shadow-gray-400 rounded-xl lg:p-4 w-full h-auto pb-4">
            <div className="p-4">
              <form onSubmit={handleSubmit}>
                {/* NAME & PHONE NUMBER */}
                <div className="grid md:grid-cols-2 gap-4 w-full py-2">
                  {/* NAME */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">NAME *</label>
                    <input
                      name="name"
                      value={contact.name}
                      onChange={onChangeContact}
                      type="text"
                      className={`p-2 border-[2px] w-full rounded-lg focus:outline-indigo-500 ${
                        errors.name ? "border-red-500 " : "border-gray-500"
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-600  ">Name is required.</p>
                    )}
                  </div>
                  {/* PHONE NUMBER */}
                  <div className="flex flex-col">
                    <label className="uppercase text-sm py-2">
                      PHONE NUMBER
                    </label>
                    <input
                      name="phone"
                      value={contact.phone}
                      onChange={onChangeContact}
                      type="text"
                      className={`p-2 border-[2px] w-full rounded-lg border-gray-500 focus:outline-indigo-500`}
                    />
                   
                  </div>
                </div>
                {/* EMAIL */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Email *</label>
                  <input
                    name="email"
                    onChange={onChangeContact}
                    value={contact.email}
                    type="email"
                    className={`p-2 border-[2px] w-full rounded-lg focus:outline-indigo-500 ${
                      errors.email ? "border-red-500 " : "border-gray-500"
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-600  ">Email is required.</p>
                  )}
                </div>
                {/* SUBJECT */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Subject *</label>
                  <input
                    name="subject"
                    onChange={onChangeContact}
                    value={contact.subject}
                    type="text"
                    className={`p-2 border-[2px] w-full rounded-lg out focus:outline-indigo-500  ${
                      errors.subject ? "border-red-500 " : "border-gray-500"
                    }`}
                  />
                  {errors.subject && (
                    <p className="text-red-600  ">Subject is required.</p>
                  )}
                </div>
                {/* MESSAGE */}
                <div className="flex flex-col">
                  <label className="uppercase text-sm py-2">Message *</label>
                  <textarea
                    name="message"
                    onChange={onChangeContact}
                    value={contact.message}
                    rows="10"
                    className={`p-2 border-[2px] w-full rounded-lg focus:outline-indigo-500 ${
                      errors.message ? "border-red-500 " : "border-gray-500"
                    }`}
                  ></textarea>
                  {errors.message && (
                    <p className="text-red-600  ">Message is required.</p>
                  )}
                </div>
                {/* SEND BUTTON */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full mt-6 font-medium text-gray-100 uppercase bg-gradient-to-r from-indigo-600 to-indigo-400 p-4 rounded-lg"
                >
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
