import React from "react";

function Card({ product }) {
  return (
    <div className="flex max-w-[300px] flex-col gap-5">
      <div className="bg-stone-200">
        <img
          src={product.url}
          alt={product.name}
          className="w-full h-auto object-scale-down object-center"
        />
      </div>
      <div className="flex flex-col gap-1">
        <p className="uppercase text-xs">{product.name}</p>
        <p className="flex gap-2">
          {product.sale ? (
            <>
              <span className="text-red-500 font-semibold text-lg">
                {product.sale}
              </span>{" "}
              <span className="text-opacity-60 font-semibold self-end text-gray-700 line-through">
                {product.price}
              </span>
            </>
          ) : (
            <span className="text-lg font-semibold">{product.price}</span>
          )}
        </p>
      </div>
    </div>
  );
}

export default Card;
