import React from "react";
import EmailForm from "./EmailForm";
import pic1 from "../assets/logo.png";
import { Link } from "react-router-dom";
import name from "../assets/name.png";
import React from "@vitejs/plugin-react";


function AboutUs() {
  return (
    <section className="bg-white p-6 text-center">
      <div className="flex items-center gap-10">
        {/* Logo */}
        <img src={pic1} alt="Logo" className="w-10 h-10" />

        {/* Nav Menu */}
        <nav className="flex items-center gap-8 text-sm font-medium text-black">
          <Link to="/carat" className="hover:underline">CARAT</Link>
          <Link to="/collection" className="hover:underline">COLLECTION</Link>
          <Link to="/about" className="hover:underline  font-bold">ABOUT US</Link>
        </nav>
      </div>

          <img
                src={name}
                alt="Say the Name"
                className="relative w-full mt-5 mb-5" 
              />

      {/*About*/}
      <h2 className="text-3xl font-semibold mb-2">About Us</h2>
      <p className="mb-2 flex items-start">
          Welcome to Say the Name – a space built to inspire, connect, and create meaning through merchandise. We believe that every item carries, a memory, and a contentment.

At Say the Name, we aim to celebrate individuality and authenticity. It express what can you know about the artist and to be more inspired every single item you purchase.

We are passionate about giving people a platform where their connection. Here, we encourage you to buy accordingly, connect with the artist, and be proud of who they idolized.</p>
      <p className="mb-2 flex items-start">As a founder, she is passionate about building a community that values authenticity and connection. Her vision is to create a platform that celebrates diversity, uplifts voices, and encourages people to be proud of who they idolized. At the age of 24 years old, she deeply fond of her favorite K-pop group. It created a strong sense of identity and belonging.

Through Say the Name, Ma. Paula Andrea Labios continues to champion the idea that when we say the name, we honor the person, their journey, and the life behind it.

 </p>
       {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 mt-8">
        <h3 className="font-semibold text-lg">SAY THE NAME</h3>
        <p className="text-sm">© All rights reserved 2025</p>
      </footer>
     
      <p className="mb-5 mt-5 flex items-start">CONTACT US: <a href="mailto:saythename@coup.com" className="text-blue-600 underline ">saythename@coup.com</a></p>
      <EmailForm />
    </section>
  );
}
export default AboutUs;