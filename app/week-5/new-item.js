"use client";
import { useState } from "react";

export default function Quantity() {
  let [quantity, setQuantity] = useState(1);
  let [category, setCategory] = useState("Produce");
  let [name, setName] = useState("");

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

  function handleSubmit(event) {
    event.preventDefault();
    let item = {name, quantity, category};
    console.log(item);
    alert(`Item added: ${name}, Quantity: ${quantity}, Category: ${category}`);

    setQuantity(1);
    setName("");
    setCategory("Produce");
  };

  return (
    <div className="m-4 bg-white p-3 w-100 flex flex-col items-center justify-center">
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Item Name" value={name} onChange={(event) => setName(event.target.value)} required className="text-black border border-black rounded w-90 h-10 pl-2 mt-2"></input>

        <div className="bg-white pt-3 pb-3 w-90 flex flex-row gap-3">
          <span className="w-9 h-9 text-black border border-black font-bold flex items-center justify-center rounded">{quantity}</span>
          <button 
            type="button"
            onClick={decrement}
            className={`rounded text-white p-2 w-9 h-9 flex items-center justify-center 
              ${quantity === 1 ? "bg-gray-400" : "bg-blue-400 font-bold hover:bg-blue-500 active:bg-blue-700"}`}
          >
            -
          </button>
          <button
            type="button"
            onClick={increment}
            className={`rounded text-white p-2 w-9 h-9 flex items-center justify-center 
              ${quantity === 20 ? "bg-gray-400" : "bg-blue-400 font-bold hover:bg-blue-500 active:bg-blue-700"}`}
          >
            +
          </button>
          <select className="h-9 text-black border border-black rounded pl-2 flex-1" value={category} onChange={(event) => setCategory(event.target.value)}>
            <option value="Produce">Produce</option>
            <option value="Dairy">Dairy</option>
            <option value="Bakery">Bakery</option>
            <option value="Meat">Meat</option>
            <option value="Frozen Foods">Frozen Foods</option>
            <option value="Canned Goods">Canned Goods</option>
            <option value="Dry Goods">Dry Goods</option>
            <option value="Beverages">Beverages</option>
            <option value="Snacks">Snacks</option>
            <option value="Household">Household</option>
            <option value="Other">Other</option>
          </select>
        </div>
          <button type="submit" className="bg-blue-400 font-bold hover:bg-blue-500 active:bg-blue-70 p-2 w-90 rounded">AddItem</button>
      </form>
    </div>
  );
}