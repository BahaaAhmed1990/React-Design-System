import { cva } from "class-variance-authority";
import React from "react";
import { cn } from "../../utils/class-merge";

const navLink = cva("text-slate-300 bg-brand cursor-pointer group", {
  variants: {
    intent: {
      link: "flex justify-center items-center hover:text-accent",
      iconLink: "flex flex-col justify-center items-center hover:text-accent ",
    },
    size: {
      sm: "px-2 py-3",
      md: "px-3 py-4",
      lg: "px-4 py-5",
    },
  },
});

export default function NavLink({ intent, label, size, icon }) {
  return (
    <>
      <span className={cn(navLink({ intent, size }))}>
        {label}
        {icon}
      </span>
    </>
  );
}
