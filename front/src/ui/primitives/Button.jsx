import { cva } from "class-variance-authority";
import { cn } from "../../utils/class-merge";
import { useState } from "react";
const button = cva(
  "flex justify-center items-center p-2 text-slate-300 bg-brand group",
  {
    variants: {
      intent: {
        primary: " hover:text-accent transition-all",
        navBtn: "flex-col-reverse  hover:text-accent transition-all",
        backBtn: "justify-between hover:text-accent transition-all",
      },
      size: {
        sm: "text-[14px] rounded-md px-2 py-2",
        md: ["text-[18px] rounded-md py-2 px-3"],
        lg: ["text-[18px] rounded-lg py-2 px-2"],
        xl: ["text-[20px] rounded-lg py-2  px-2"],
      },
      active: {
        true: "text-accent",
      },
    },
  }
);
/**
 * Primary UI component for user interaction
 */
export const Button = ({
  intent,
  icon,
  size,
  label,
  handleClick,
  ...props
}) => {
  const [active, setActive] = useState(false);

  function onHandleClick() {
    // console.log("from button");
    handleClick();
    setActive(!active);
  }
  return (
    <button
      className={cn(button({ intent, size, active }))}
      {...props}
      onClick={onHandleClick}
    >
      {icon}
      {label}
    </button>
  );
};
