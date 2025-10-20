import react from "react";
import hea from '../assets/heaven.png'
import irh from '../assets/17irh.png'
import com from '../assets/compact.png'
import pic2 from "../assets/Digicode.png";
import pic3 from "../assets/hbd.png";
import pic4 from "../assets/CXM.png";
import stf from "../assets/stf.png";
import tele from "../assets/tele.png";
import pic1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import EmailForm from "./EmailForm";
import React from "@vitejs/plugin-react";

function Collection() {
  const products = [ 
    { name: "Compact Ver", image: com },
    { name: "17 is Right Here", image: irh },
    { name: "Heaven", image: hea},
    { name: "Digicode", image: pic2},
    { name: "Happy Burstday Kit", image: pic3 },
    { name: "Spill the feels", image: stf },
    { name: "Teleparty", image: tele },
    { name: "CXM ", image: pic4 },
  ];

  return (
    <section className="bg-gray-100 p-6">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <img src={pic1} alt="Logo" className="w-10 h-10" />

        {/* Nav Menu */}
        <nav className="flex items-center gap-8 text-sm font-medium text-black">
          <Link to="/carat" className="hover:underline">CARAT</Link>
          <Link to="/collection" className="hover:underline font-bold">COLLECTION</Link>
          <Link to="/about" className="hover:underline">ABOUT US</Link>
        </nav>
      </div>

      {/*Collection*/}
      <h2 className="text-3xl font-semibold mb-4 text-center">Collection</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {products.map((item, i) => (
          <div key={i} className="bg-white p-4 rounded shadow text-center">
            <img src={item.image} alt={item.name} className="rounded mb-2 " />
            <p className="font-medium">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="text-right mt-6">
        <button className="bg-black text-white py-2 px-6 rounded hover:bg-pink-600 transition">
          CHECKOUT
        </button>
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
export default Collection;