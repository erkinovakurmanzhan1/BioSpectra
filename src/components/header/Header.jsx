import React from "react";
import logo from "../../assets/icons/arcticons_biota.svg";
import logoBlack from "../../assets/icons/arcticons_biota (1) (1).svg";
import { ReactComponent as ProfileIcon } from "../../assets/icons/material-symbols_person-outline.svg";
import { ReactComponent as ProfileIconBlack } from "../../assets/icons/profile-balck.svg";

import { useLocation } from "react-router";
import { NavLink } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  return (
    <div className="w-full h-[6.875rem]  flex justify-between px-[6.25rem] text-base text-white font-semibold">
      <div className="flex items-center relative cursor-pointer">
        <NavLink to="/">
          {location.pathname === "/" ? (
            <img
              src={logo}
              alt="logo"
              className={`w-[4.375rem] h-[4.375rem] `}
            />
          ) : (
            <img
              src={logoBlack}
              alt="logo"
              className={`w-[4.375rem] h-[4.375rem] `}
            />
          )}
          <p
            className={`text-[1.5625rem] font-normal absolute left-[3.8rem] top-14 ${
              location.pathname === "/" ? "" : "text-black"
            }`}
          >
            {" "}
            ioSpectra
          </p>
        </NavLink>
      </div>
      <div
        className={`flex pt-[3.5rem] pb-[5.75rem] gap-[3.5rem] ${
          location.pathname === "/" ? "" : "text-black"
        }`}
      >
        <a href="about-us" className="hover:text-blue-950">
          About us
        </a>
        <a href="events" className="hover:text-blue-950">
          Events
        </a>
        <a href="map" className="hover:text-blue-950">
          Map
        </a>
      </div>
      <div className="pt-[3.5rem] pb-[5.75rem] cursor-pointer flex gap-8">
        <a
          href="#contacts"
          className={`hover:text-blue-950 ${
            location.pathname === "/" ? "" : "text-black"
          }`}
        >
          Contact us
        </a>
        <button>
          {location.pathname === "/" ? (
            <ProfileIcon className="w-6 h-6" />
          ) : (
            <ProfileIconBlack className="w-6 h-6" />
          )}
        </button>
      </div>
    </div>
  );
};

export default Header;
