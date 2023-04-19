import React from "react";
import busIcon from "../../assets/hero/delivery-bus.svg";
import happyIcon from "../../assets/hero/Happy-emoji.svg";
import guaranteedIcon from "../../assets/hero/guarantee.svg";

export default function Card() {
  return (
    <section className="grid grid-cols-1 min-[470px]:grid-cols-2 sm:grid-cols-3 auto-cols-auto gap-10 py-10 px-3 mb-8 sm:max-w-[90%] max-w-[96%] mx-auto bg-white">
      <div className="grid grid-cols-[20px_1fr] gap-10">
        <span className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center">
          <img src={busIcon} alt="fast delivery" />
        </span>
        <span>
          <h3 className="font-semibold mb-1.5">Free Shipping</h3>
          <p className="text-sm text-gray-600">On payment over $399</p>
        </span>
      </div>
      <div className="grid grid-cols-[20px_1fr] gap-10">
        <span className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center">
          <img src={happyIcon} alt="happy satisfied customer" />
        </span>
        <span>
          <h3 className="font-semibold mb-1.5">99% Satisfied Customers</h3>
          <p className="text-sm text-gray-600">
            Our Clients' Opinion speak for themselves
          </p>
        </span>
      </div>
      <div className="grid grid-cols-[20px_1fr] gap-10">
        <span className="w-10 h-10 rounded-lg bg-blue-200 flex items-center justify-center">
          <img src={guaranteedIcon} alt="Best quality" />
        </span>
        <span>
          <h3 className="font-semibold mb-1.5">Originality Guaranteed</h3>
          <p className="text-sm text-gray-600">
            2 years warranty for every products in our store
          </p>
        </span>
      </div>
    </section>
  );
}
