import React from "react";
import sc from "../assets/sc.jpg";
import dn from "../assets/dn.jpg";
import sk from "../assets/sk.jpg";
import pic1 from "../assets/logo.png";
import PB from "../assets/PB.png";
import goyang from "../assets/goyang.png";
import follow from "../assets/follow.png";
import { Link } from "react-router-dom";



function Carat() {
  const comments = [
    {
      name: "S.COUPS",
      date: "Aug 12, 2024",
      text: "I am craving sushi today.",
      img: sc,
      
    },
    {
      name: "DINO",
      date: "Dec 25, 2022",
      text: "Merry Christmas, Caratdeul!!!",
      img: dn,
    },
    {
      name: "람걍",
      date: "Oct 04, 2024",
      text: "Happy birthday, hannihae!! see you on stage.",
      img: sk,
    },
  ];

  return (
    <div className="bg-white min-h-screen">
      {/* HEADER */}
      <header className="flex justify-between items-center px-6 py-3 border-b bg-white">
        <div className="flex items-center gap-8">
          <img src={pic1} alt="Logo" className="w-8 h-8" />
        {/* Nav Menu */}
                <nav className="flex items-center gap-8 text-sm font-medium text-black">
                  <Link to="/carat" className="hover:underline font-bold">CARAT</Link>
                  <Link to="/collection" className="hover:underline">COLLECTION</Link>
                  <Link to="/about" className="hover:underline">ABOUT US</Link>
        </nav>
        </div>
        <div className="flex items-center gap-2">
          <p className="text-sm font-medium">Hello, Caratdeul!</p>
          
        </div>

      </header>

      {/* MAIN CONTENT */}
      <main className="max-w-6xl mx-auto p-6 grid md:grid-cols-3 gap-6">
        {/* LEFT SIDE - ARTICLE + COMMENTS */}
        <section className="md:col-span-2">
          <div className="border p-4 mb-4">
            <h1 className="text-lg font-semibold">
              [NEW] S.Coups and Mingyu will officially debut as a new SEVENTEEN unit with a new album release in September
            </h1>
            <p className="text-right text-sm mt-1">Source: NewSen</p>
          </div>

          <h2 className="font-semibold mb-2">Comments</h2>
          <div className="space-y-4">
            {comments.map((c, i) => (
              <div key={i}>
                <div className="flex items-center gap-2 mb-1">
                  
                  <span className="font-semibold">{c.name}</span>
                </div>
                <p className="text-sm text-gray-500 mb-1">{c.date}</p>
                <p className="mb-2">{c.text}</p>
                <img src={c.img} alt={c.name} className="w-32 rounded-lg shadow" />
              </div>
            ))}
          </div>

          <input
            type="text"
            placeholder="leave a comment"
            className="mt-4 w-full border px-3 py-2 text-sm rounded"
          />
        </section>

        {/* RIGHT SIDE - IMAGES */}
        <aside className="space-y-4">
          <img src={follow} alt="Tour" className="rounded border" />
          <img src={goyang} alt="Seventeen Group" className="rounded border" />
        </aside>
      </main>
            <img
            src={PB}
            alt="Say the Name"
            className="relative w-full mt-5 mb-5" 
        />

      {/* FOOTER */}
      <footer className="bg-black text-white text-center py-6 mt-8">
        <h3 className="font-semibold text-lg">SAY THE NAME</h3>
        <p className="text-sm">© All rights reserved 2025</p>
      </footer>
      <p className="mb-5 mt-5 flex items-start">CONTACT US: <a href="mailto:saythename@coup.com" className="text-blue-600 underline">saythename@coup.com</a></p>
      <EmailForm />
    </div>
  );
}

export default Carat;
