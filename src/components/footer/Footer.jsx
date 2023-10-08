import React from "react";
import logo from "../../assets/icons/arcticons_biota.svg";


const Footer = () => {
  return (
    <div className="bg-black flex justify-between px-[6.25rem] pt-20 pb-36">
      <div className="flex gap-14">
        <div className="cursor-pointer">
          <img src={logo} alt="logo" />
        </div>
        <div className="text-white flex flex-col gap-6">
          <a href="about-us" className="hover:text-blue-400">
            About us
          </a>
          <a href="events" className="hover:text-blue-400">
            Events
          </a>
          <a href="map" className="hover:text-blue-400">
            Map
          </a>
        </div>
      </div>
      <div className="text-white">
        <p className="pb-2">Контакты</p>
        <p>Email: biospectra@gmail.com</p>
        <p className="pb-5">Phone: +996703350917</p>
        <div>
          <p>Найдите нас в соц сетях</p>
          <div>
            <img src="" alt="" />
            <p>biospectra</p>
          </div>
        </div>
      </div>
      <div className="flex flex-col text-white">
        <p className="text-base font-semibold hover:text-blue-400">
          Subscribe to our newsletter
        </p>
        <div className="flex flex-col gap-5 pt-10 pb-5">
          <input
            type="text"
            name=""
            id=""
            className="w-[22rem] h-14 bg-black border border-white outline-none rounded-lg pl-2 placeholder:text-white"
            placeholder="Name"
          />
          <input
            type="text"
            name=""
            id=""
            className="w-[22rem] h-14 bg-black border border-white outline-none rounded-lg pl-2 placeholder:text-white"
            placeholder="Email"
          />
        </div>
        <div>
          <button className="py-2 px-4 bg-[#1DB688] rounded-full font-medium">
            What we do
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
