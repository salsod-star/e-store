import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
export default function Hero() {
  return (
    <section className="text-white px-6 bg-[url('/src/assets/hero/hero.png')] bg-cover bg-no-repeat bg-neutral-600 bg-blend-overlay sm:bg-center flex min-h-[70vh] sm:min-h-[90vh] md:px-16 sm:px-14 flex-col items-start justify-center gap-6">
      <h1 className="text-[35px] leading-10 font-semibold">
        Make your house into a home
      </h1>
      <div className="flex gap-2 items-center cursor-pointer">
        <BsArrowRightShort className="text-4xl text-white bg-blue-600 h-7 w-7 rounded-full" />
        <p className="uppercase text-sm font-semibold">Shop Now</p>
      </div>
    </section>
  );
}
