import React, { useState } from "react";
import Item from "./Item";

export default function Packinglist({
  items,
  onDeleteItem,
  ontoggle,
  handleclear,
}) {
  const [sortby, setsortby] = useState("packed");
  let sorteditems;
  if (sortby === "input") sorteditems = items;
  if (sortby === "description")
    sorteditems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortby === "packed")
    sorteditems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));
  return (
    <>
      <div className="list">
        <ul>
          {sorteditems.map((item) => (
            <Item
              item={item}
              key={item.id}
              onDeleteItem={onDeleteItem}
              ontoggle={ontoggle}
            />
          ))}
        </ul>
        <div className="actions">
          <select value={sortby} onChange={(e) => setsortby(e.target.value)}>
            <option value="input">Sort by input order</option>
            <option value="description">Sort by description</option>
            <option value="packed">Sort by packed status</option>
          </select>
          <button className="bg-red" onClick={handleclear}>
            Clear list{" "}
          </button>
        </div>
      </div>
    </>
  );
}
