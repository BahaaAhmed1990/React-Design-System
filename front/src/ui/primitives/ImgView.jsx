import { cva } from "class-variance-authority";
import React from "react";

const imgView = cva("flex justify-center  items-center", {
  variants: {
    intent: {
      logo: "w-[100px]",
    },
  },
});

export default function ImgView({ src, intent, ...props }) {
  return (
    <div id="img-container" className={imgView({ intent })} {...props}>
      <img src={src} alt={intent} className="w-full h-full" />
    </div>
  );
}
