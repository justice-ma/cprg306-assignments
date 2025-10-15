"use client";
import { useState } from "react";
import itemsData from "./items.json";

export default function ItemList() {
  const [sortBy, setSortBy] = useState("name");

  let itemsCopy = [...itemsData];

  itemsCopy.sort((a, b) => a[sortBy].localeCompare(b[sortBy]));

  return (
    <main className="w-115">
      <button 
      onClick={() => setSortBy("name")}
      className={`m-2 p-3 rounded font-bold
      ${sortBy === "name" ? "bg-amber-500" : "bg-gray-600"}`}
      >Sort By Name</button>

      <button 
      onClick={() => setSortBy("category")}
      className={`m-3 p-3 rounded font-bold
      ${sortBy === "category" ? "bg-amber-500" : "bg-gray-600"}`}
      >Sort By Category</button>
      <ul>
        {itemsCopy.map(item => (
          <li 
            key={item.id}
            className="bg-gray-800 m-2 p-3"
            >
            <h1 className="text-2xl font-bold">{item.name}</h1>
            {item.category}
          </li>
        ))}
      </ul>
    </main>
  );
}