import React, { useState } from "react";
import { Button } from "../primitives/Button";

export default function Filters({ filtersData }) {
  // console.log(filtersData);
  const [activeBtns, setActiveBtns] = useState(
    Array(filtersData.length).fill(false)
  );

  function handleClick(index) {
    // console.log(index, "from filters");
    let cpyActiveBtns = activeBtns.slice();
    cpyActiveBtns[index] = !cpyActiveBtns[index];
    // console.log("copy active btns", cpyActiveBtns);
    setActiveBtns(cpyActiveBtns);
  }
  // console.log("state active btns", activeBtns);
  return (
    <>
      {filtersData &&
        filtersData.map((filterItem, index) => (
          <Button
            key={index}
            label={filterItem.title}
            intent="navBtn"
            size="md"
            icon={filterItem.icon}
            handleClick={() => handleClick(index)}
          />
        ))}
    </>
  );
}
