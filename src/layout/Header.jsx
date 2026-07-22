import { Icon } from "@iconify/react";
import React, { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="bg-[#031312] text-white">
        <nav className="flex items-center justify-between h-16 px-6">
          <div className="hidden sm:flex mx-auto gap-10 font-inter">
            <a href="/" className="cursor-pointer  hover:text-gray-300 text-lg">
              Home
            </a>
            <a
              href="/varieties"
              className="cursor-pointer  hover:text-gray-300 text-lg"
            >
              Varieties
            </a>
            <a
              href="/locations"
              className="cursor-pointer  hover:text-gray-300 text-lg"
            >
              Locations
            </a>
          </div>
          <button
            className="sm:hidden ml-auto"
            onClick={() => setMenuOpen(true)}
          >
            <Icon icon="heroicons:bars-3" width={28} />
          </button>
        </nav>
      </header>
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 sm:hidden"
          onClick={() => setMenuOpen(false)}
        />
      )}
      <div
        className={`fixed top-0 right-0 h-screen w-72 bg-[#031312] text-white z-50 transform transition-transform duration-300 ease-in-out sm:hidden ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-5 border-b border-gray-700">
          <h2 className="text-lg font-semibold">Menu</h2>

          <button onClick={() => setMenuOpen(false)}>
            <Icon icon="heroicons:x-mark" width={28} />
          </button>
        </div>
        <div className="flex flex-col p-6 gap-6 text-lg">
          <a href="/" className="hover:text-gray-300">
            Home
          </a>
          <a href="/varieties" className="hover:text-gray-300">
            Varieties
          </a>
          <a href="/locations" className="hover:text-gray-300">
            Locations
          </a>
        </div>
      </div>
    </>
  );
}
