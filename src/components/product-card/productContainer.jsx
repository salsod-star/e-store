import React from "react";
import Card from "./card";

export default function ProductContainer({ children, products }) {
  return (
    <section className="mt-20 sm:max-w-[90%] max-w-[96%] mx-auto">
      {children}
      <div className="grid grid-cols-1 min-[360px]:grid-cols-2 sm:grid-cols-3 auto-cols-auto justify-items-center gap-10">
        {products ? (
          products.map((product) => <Card product={product} key={product.id} />)
        ) : (
          <h1>No product in the database</h1>
        )}
      </div>
    </section>
  );
}
