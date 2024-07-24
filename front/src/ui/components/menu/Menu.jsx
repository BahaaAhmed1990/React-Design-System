import React from "react";
import MenuItem from "./MenuItem";

export default function Menu({ menuData }) {
  console.log(menuData);

  return (
    <ul className="flex justify-between items-center text-slate-300 gap-3">
      {menuData &&
        menuData.map((menuItem) =>(
        <MenuItem segement={menuItem} key={menuItem.id}/> 
        ))}
    </ul>
  );
}
