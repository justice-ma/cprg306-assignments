"use client";
import { useState } from "react";

export default function Quantity() {
  let [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < 20) {
      setQuantity(quantity + 1);
    } 
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="m-4 bg-white p-3 w-45 h-15 flex flex-row items-center justify-center gap-5">
      <span className="w-9 h-9 text-black border border-black font-bold flex items-center justify-center rounded">{quantity}</span>
       <button 
        onClick={decrement}
        className={`rounded text-white p-2 w-9 h-9 flex items-center justify-center 
          ${quantity === 1 ? "bg-gray-400" : "bg-blue-400 font-bold hover:bg-blue-500 active:bg-blue-700"}`}
      >
        -
      </button>
      <button
        onClick={increment}
        className={`rounded text-white p-2 w-9 h-9 flex items-center justify-center 
          ${quantity === 20 ? "bg-gray-400" : "bg-blue-400 font-bold hover:bg-blue-500 active:bg-blue-700"}`}
      >
        +
      </button>
    </div>
  );
}
