import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { HiOutlineShoppingCart } from "react-icons/hi";
import { FaRegUser } from "react-icons/fa";
import { CgMenu } from "react-icons/cg";

function Nav() {
  const [showMenu, setShowMenu] = useState(false);

  let mobileNav = "";

  if (showMenu) {
    mobileNav = (
      <ul
        className={`text-base flex flex-col w-40  py-4 bg-white text-gray-900 gap-3 items-center absolute right-0 shadow-lg ${
          showMenu
            ? "transition duration-1000 ease-in-out top-[101%]"
            : "top-[-150%]"
        }`}
      >
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Inspiration</li>
        <li className="cursor-pointer">Rooms</li>
      </ul>
    );
  }

  return (
    <>
      {mobileNav}
      <ul className="text-base text-gray-900 gap-3 items-center hidden sm:flex">
        <li className="cursor-pointer">Products</li>
        <li className="cursor-pointer">Inspiration</li>
        <li className="cursor-pointer">Rooms</li>
      </ul>
      <div className="flex gap-3 items-center">
        <AiOutlineSearch className="cursor-pointer w-5 h-auto" />
        <HiOutlineShoppingCart className="cursor-pointer w-5 h-auto" />
        <FaRegUser className="hidden sm:inline-block" />
        <CgMenu
          className="cursor-pointer text-[22px] sm:hidden"
          onClick={() => setShowMenu((prev) => !prev)}
        />
      </div>
    </>
  );
}

export default Nav;
