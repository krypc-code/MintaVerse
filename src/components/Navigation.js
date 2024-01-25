import React from "react";
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <nav
      className="w-[40%] mt-16 flex justify-around align-middle
    border border-cyan rounded-lg
    "
    >
      <NavLink
        to="/"
        end
        className={({ isActive }) => {
          return `w-full text-base text-center font-raleway m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        MintMyNFT
      </NavLink>

      <NavLink
        to="/dashboard"
        className={({ isActive }) => {
          return `w-full text-base text-center font-raleway m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
      MyNFTs  
      </NavLink>

      <NavLink
        to="/saved-nfts"
        className={({ isActive }) => {
          return `w-full text-base text-center font-raleway m-2.5

${
  isActive
    ? "bg-cyan text-gray-300"
    : "bg-gray-200 text-gray-100hover:text-cyan active:bg-cyan active:text-gray-300"
}
    border-0 cursor-pointer rounded capitalize font-semibold`;
        }}
      >
        savedNFTs
      </NavLink>
    </nav>
  );
};

export default Navigation;