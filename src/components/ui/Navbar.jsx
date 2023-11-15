import React, { useState } from "react";
import { RiLoginCircleLine } from "react-icons/ri";
import { MdSoupKitchen } from "react-icons/md";
import { GiKnifeFork } from "react-icons/gi";
import LogoMoma from "../../assets/logo.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="flex justify-between items-center p-4">
      <div>
        <a href="/" className="flex items-center">
          <img src={LogoMoma} alt="Logo de Moma Chief" className="w-[70px]" />
        </a>
      </div>

      <nav className="hidden md:flex space-x-12 mb-4 font-semibold">
        <a
          href="/"
          className={`hover:text-white nav-link ${
            location.pathname === "/" ? "border-b-2 border-secondary" : ""
          }`}
        >
          Accueil
        </a>
        <a
          href="/domicile"
          className={`hover:text-white nav-link ${
            location.pathname === "/domicile"
              ? "border-b-2 border-secondary"
              : ""
          }`}
        >
          Chef a domicile
        </a>
        <a href="/">Traiteur</a>
        <a href="/">Cours de cuisine</a>
        <a href="/">Livre d'or</a>
      </nav>

      <div className="hidden md:flex space-x-2 mb-4">
        <a href="/">
          <RiLoginCircleLine size={24} />
        </a>
      </div>

      <div className="md:hidden">
        <MdSoupKitchen size={24} onClick={toggleMobileMenu} className="mb-4" />
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden fixed inset-0 bg-[#f2ccbe] flex flex-col items-center justify-center z-50">
          <div className="absolute top-0 right-0 mt-4 mr-4">
            <button
              onClick={toggleMobileMenu}
              className="focus:outline-none mt-4"
            >
              <GiKnifeFork size={24} />
            </button>
          </div>

          <div className="text-center space-y-4 font-semibold">
            <a href="/" className="block">
              Accueil
            </a>
            <a href="/" className="block">
              Chef a domicile
            </a>
            <a href="/" className="block">
              Traiteur
            </a>
            <a href="/" className="block">
              Cours de cuisine
            </a>
            <a href="/" className="block">
              Livre d'or
            </a>
          </div>

          <div className="fixed bottom-0 mb-12 flex items-center justify-center space-x-2">
            <RiLoginCircleLine size={24} />
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
