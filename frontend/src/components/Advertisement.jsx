import React from "react";
import name from "../images/name.png";
import pic1 from "../images/logo.png";
import pic2 from "../images/Digicode.png";
import pic3 from "../images/hbd.png";
import pic4 from "../images/CXM.png";
import icon from "../images/user.png";
import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";
import React from "@vitejs/plugin-react";

function Advertisement() {
  return (
    <section className="bg-white text-black p-6">
      {/* Banner */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <img src={pic1} alt="Logo" className="w-10 h-10" />

        {/* Nav Menu */}
        <nav className="flex items-center gap-8 text-sm font-medium text-black">
          <Link to="/carat" className="hover:underline font-bold">CARAT</Link>
          <Link to="/collection" className="hover:underline">COLLECTION</Link>
          <Link to="/about" className="hover:underline">ABOUT US</Link>
        </nav>
              {/* RIGHT: Account / Join Now */}
        <div className="flex items-center gap-2 text-sm font-semibold text-black  ">
        <p className="text-sm font-medium">Join Now</p>
          {/* <img src={icon}
          alt = "profile"
          className="flex items- end"
          /> */}
        </div>
      </div>


      <div>
      <img
          src={name}
          alt="Say the Name"
          className="relative w-full mt-5 mb-5" 
        />
        <p className="text-sm text-gray-600 mt-5 mb-5 underline cursor-pointer text-right">
          Show more
        </p>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
        <div className="border p-4 text-center">
          <img
            src={pic2}
            alt="Seventeen Right Here"
            className="mx-auto mb-3 rounded-md"
          />
          <p>Seventeen Right Here in Goyang (Digital Code)</p>
          <p className="font-semibold">$54.25</p>
        </div>

        <div className="border p-4 text-center">
          <img
            src={pic3}
            alt="Happy Burstday Standard Ver"
            className="mx-auto mb-3 rounded-md"
          />
          <p>Happy Burstday Kit (Regular Version)</p>
          <p className="font-semibold">$45.25</p>
        </div>

        <div className="border p-4 text-center">
          <img
            src={pic4}
            alt="CXM Sub Unit Album"
            className="mx-auto mb-3 rounded-md"
          />
          <p>CXM Sub Unit Album</p>
          <p className="font-semibold">$60.26</p>
        </div>
      </div>

           {/* Promo Section */}
           <div className="grid grid-cols-1 sm:grid-cols-3 text-center items-center mb-8">
        <div className="text-red-600 font-bold text-2xl">
          20% OFF
          <p className="text-sm font-normal text-black">
            First order without minimum purchase
          </p>
        </div>

        <button className="bg-black text-white py-3 px-6 font-semibold rounded-md hover:bg-gray-800 transition">
          ORDER NOW
        </button>

        <div className="text-red-600 font-bold text-2xl">
          FREE
          <p className="text-sm font-normal text-black">SHIPPING</p>
        </div>
      </div>

      {/* News and Fan Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="border p-4">
          <p className="font-semibold mb-2">
            [NEW] S.Coups and Mingyu will officially debut as a new SEVENTEEN
            unit with a new album release in September
          </p>
          <p className="text-sm text-gray-500">Source: NewSen</p>
        </div>

        <div className="border p-4 text-sm leading-tight">
          <p className="font-bold">
            생일 축하해요, 최승철! <span className="block text-xs">08.08.1995</span>
          </p>
          <p className="mt-2 font-semibold">FANCHANT</p>
          <p className="mt-1 text-gray-700">
            CHOI SEUNGCHEOL YOON JEONGHAN HONG JISOO MOON JUNHUI KWON SOONYOUNG
            JEON WONWOO LEE JIHOON SEO MYEONGHO KIM MINGYU LEE SEOKMIN BOO
            SEUNGKWAN CHWE HANSOL LEE CHAN CARATDEUL WU JI MI CHA
          </p>
        </div>
      </div>
            {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 mt-8">
        <h3 className="font-semibold text-lg">SAY THE NAME</h3>
        <p className="text-sm">© All rights reserved 2025</p>
      </footer>
      <p className="mb-5 mt-5 flex items-start">CONTACT US: <a href="mailto:saythename@coup.com" className="text-blue-600 underline">saythename@coup.com</a></p>
      <EmailForm />
    </section>
  );
}

export default Advertisement;