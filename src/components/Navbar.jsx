import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { navLinks } from "../constants";
import { close, menu } from "../assets";

const handleDownload = () => {
  console.log("Sas");
  
  const link = document.createElement("a")
  link.href = "/resume.pdf";
  link.download = "sahilResume.pdf";
  link.click();
}

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState();
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto z-20">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src="logoS.jpg" className="w-9 h-9 object-contain rounded-md"   />
          <span className="text-white text-[-18px] font-bold cursor-pointer">
            Sahil
          </span>{" "}
          <span className="sm:block hidden"> | Portfolio | </span>
        </Link>
        <ul className="hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => {
            return (
              <li
                key={link.id}
                className={`${
                  active === link.title ? "text-white" : "text-secondary"
                } hover:text-white text-[18px] font-medium cursor-pointer `}
                onClick={() => {
                  setActive(link.title)
                  if (link.id === "download") handleDownload();     

                }}
              >
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col gap-4 justify-end items-start">
              {navLinks.map((link) => {
                return (
                  <li
                    key={link.id}
                    className={`${
                      active === link.title ? "text-white" : "text-secondary"
                    } font-poppins font-medium cursor-pointer text-[16px] `}
                    onClick={() => {
                      if (link.id === "download") handleDownload();     
                      setActive(link.title);
                      setToggle(!toggle);
                    }}
                  >
                    <a href={`#${link.id}`}>{link.title}</a>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
