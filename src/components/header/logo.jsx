import React from "react";
import logo from "../../assets/footer/logo black.svg";

export default function Logo() {
  return (
    <span className="flex items-center gap-3.5 cursor-pointer">
      <img src={logo} alt="logo" className="w-10 h-auto" />{" "}
      <span className="text-base font-semibold">E-Shop</span>
    </span>
  );
}
