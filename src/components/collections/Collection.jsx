import React from "react";
import Button from "../Button";

export default function Collection() {
  return (
    <section className="flex items-center justify-between flex-col sm:flex-row sm:max-w-[90%] max-w-[96%] mx-auto">
      <div className="bg-[url('/src/assets/category/yellow-chair-category.svg')] bg-cover bg-orange-300 bg-blend-normal bg-left bg-no-repeat text-white w-full sm:min-w-1/2 h-80 flex items-center justify-center lg:items-end md:pr-20 flex-col gap-5">
        <h2 className="text-xl font-semibold">
          New collection <br /> available now
        </h2>
        <Button style="bg-white text-black">view all</Button>
      </div>
      <div className="bg-[url('/src/assets/category/blue-chair-category.svg')] bg-cover bg-blue-300 bg-blend-normal bg-left bg-no-repeat text-white w-full sm:min-w-1/2 h-80 flex items-center justify-center lg:items-end md:pr-20 flex-col gap-5">
        <h2 className="text-xl font-semibold">
          New collection
          <br />
          available now
        </h2>
        <Button style="bg-white text-black">check more</Button>
      </div>
    </section>
  );
}
