import React from "react";
import { FaFacebookSquare, FaInstagramSquare } from "react-icons/fa";
import { FaSquareGithub, FaSquareWhatsapp } from "react-icons/fa6";
import { IoLogoLinkedin } from "react-icons/io";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className=" px-6 md:px-16 lg:px-24 xl:px-32 w-full bg-[#131921] text-white shadow-lg mt-4">
      <div className=" container mx-auto flex flex-col md:flex-row items-start justify-center gap-10 py-10 border-b border-gray-500/30">
        <div className="max-w-96">
          <Link
            to="/"
            className="text-2xl font-bold hover:text-yellow-400 transition duration-500"
          >
            E-Shop
          </Link>
          <p className="mt-6 text-sm text-gray-200">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been.
          </p>
          <div className="flex items-center gap-2 mt-3 text-4xl">
            <a
              className=" text-[#fff] hover:scale-105 hover:text-[#ffffffb0] transition duration-500"
              href="https://www.instagram.com/mohamed_abd_3"
              target="_blank"
            >
              <FaInstagramSquare />
            </a>
            <a
              className=" text-[#fff] hover:scale-105 hover:text-[#ffffffb0] transition duration-500"
              href="https://github.com/Mohamedabdullah222"
              target="_blank"
            >
              <FaSquareGithub />
            </a>
            <a
              className=" text-[#fff] hover:scale-105 hover:text-[#ffffffb0] transition duration-500"
              href="https://www.linkedin.com/in/mohamed-abdullah-ba07682b6/"
              target="_blank"
            >
              <IoLogoLinkedin />
            </a>
            <a
              className=" text-[#fff] hover:scale-105 hover:text-[#ffffffb0] transition duration-500"
              href="https://Wa.me/+201019564363"
              target="_blank"
            >
              <FaSquareWhatsapp />
            </a>
            <a
              className=" text-[#fff] hover:scale-105 hover:text-[#ffffffb0] transition duration-500"
              href="https://www.facebook.com/MohamedAbdullahh22"
              target="_blank"
            >
              <FaFacebookSquare />
            </a>
          </div>
        </div>

        <div className="w-1/2 flex flex-wrap md:flex-nowrap justify-around ">
          <div className=""></div>
          <div className="text-gray-200">
            <h2 className="font-semibold text-white mb-5">COMPANY</h2>
            <div className=" flex flex-col text-sm text-gray-200 space-y-2 list-none text-bold ">
              <Link to="/">Home</Link>

              <Link to="/card">Card</Link>
              <Link to="/sign">Sign</Link>
              <Link to="/register">Register</Link>
            </div>
          </div>
        </div>
      </div>
      <p className="py-4 text-center text-xs md:text-sm text-gray-200">
        Copyright 2025 © <a href="">E-Shop</a>. All Right Reserved.
      </p>
    </footer>
  );
};

export default Footer;
