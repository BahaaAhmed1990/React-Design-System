import React, { useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import NavLink from "../../primitives/NavLink";

export default function MenuItem({ segement }) {
  
  return (
    <>
      {segement.children ? (
        <div className="realtive w-[82px] group">
          <NavLink
            intent="iconLink"
            label={segement.title}
            size="sm"
            icon={segement.icon}
          />
          <ul className="absolute hidden w-[82px] group-hover:block" >
            {segement.children.map((segmentItem) => (
              <NavLink
                label={segmentItem.title}
                size={"md"}
                intent={"link"}
                key={segmentItem.id}
              />
            ))}
          </ul>
        </div>
      ) : (
        <NavLink
          label={segement.title}
          size={"sm"}
          intent={"iconLink"}
          icon={segement.icon}
        />
      )}
    </>
  );
}
