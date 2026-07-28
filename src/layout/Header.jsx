import { Icon } from "@iconify/react";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-[#1C2A29]/20 text-white">
        <nav className="flex items-center justify-between px-6 py-3">
          <div className="hidden sm:flex mx-auto gap-10 font-primary">
            <NavLink
              to="/"
              end
              className={({ isActive }) =>
                `cursor-pointer text-lg md:text-xl ${
                  isActive
                    ? "text-[#FFA500]"
                    : "text-white hover:gradient-text2"
                }`
              }
            >
              Home
            </NavLink>

            <NavLink
              to="/varieties"
              className={({ isActive }) =>
                `cursor-pointer text-lg md:text-xl ${
                  isActive
                    ? "text-[#FFA500]"
                    : "text-white hover:gradient-text2"
                }`
              }
            >
              Varieties
            </NavLink>

            <NavLink
              to="/locations"
              className={({ isActive }) =>
                `cursor-pointer text-lg md:text-xl ${
                  isActive
                    ? "text-[#FFA500]"
                    : "text-white hover:gradient-text2"
                }`
              }
            >
              Locations
            </NavLink>
          </div>

          <button
            className="sm:hidden ml-auto"
            onClick={() => setMenuOpen(true)}
          >
            <Icon icon="heroicons:bars-3" width={28} />
          </button>
        </nav>
      </header>

      {/* Spacer for fixed header */}
      {/* <div className="h-16"></div> */}

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

        <div className="flex flex-col p-6 gap-6 text-2xl">
          <NavLink
            to="/"
            end
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFA500]"
                : "text-white hover:text-gray-300"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/varieties"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFA500]"
                : "text-white hover:text-gray-300"
            }
          >
            Varieties
          </NavLink>

          <NavLink
            to="/locations"
            onClick={() => setMenuOpen(false)}
            className={({ isActive }) =>
              isActive
                ? "text-[#FFA500]"
                : "text-white hover:text-gray-300"
            }
          >
            Locations
          </NavLink>
        </div>
      </div>
    </>
  );
}