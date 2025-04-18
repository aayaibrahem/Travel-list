import React from "react";

export default function Stats({ items }) {
  const numitems = items.length;
  const numpacked = items.filter((item) => item.packed).length;
  const percentage = Math.round((numpacked / numitems) * 100);
  return (
    <>
      <footer className="stats">
        {numitems === 0
          ? `Start adding some items to your list`
          : percentage === 100
          ? "You got everything! ready to go"
          : `you have ${numitems} items on your list , and you already packed
        ${numpacked} (${percentage}%) `}
      </footer>
    </>
  );
}
