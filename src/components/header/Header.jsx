import React from "react";
import logo from "../../assets/icons/arcticons_biota.svg";

const Header = () => {
  return (
    <div className="w-full h-[6.875rem]  flex justify-between px-[6.25rem] hover:bg-slate-100 text-base text-white font-semibold">
      <div className="flex items-center relative cursor-pointer">
        <img src={logo} alt="logo" className="w-[4.375rem] h-[4.375rem]" />
        <p className="text-[1.5625rem] font-normal absolute left-[3.8rem] top-14"> ioSpectra</p>
      </div>
      <div className="flex pt-[3.5rem] pb-[5.75rem] gap-[3.5rem]">
        <a href="about-us" className="hover:text-blue-950">About us</a>
        <a href="events" className="hover:text-blue-950">Events</a>
        <a href="map" className="hover:text-blue-950">Map</a>
      </div>
      <div className="pt-[3.5rem] pb-[5.75rem] cursor-pointer">
        <p className="hover:text-blue-950">Contact us</p>
      </div>
    </div>
  );
};

export default Header;
