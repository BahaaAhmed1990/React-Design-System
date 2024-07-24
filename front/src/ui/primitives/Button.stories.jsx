import { Button } from "./Button.jsx";
import Logo from "../../assets/react.svg?react";
import BackArrow from "../../assets/back-arrow.svg?react";

export default {
  title: "Primitives/Button",
  component: Button,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["primary", "navBtn", "backBtn"],
    },
    size: {
      control: "inline-radio",
      options: ["sm", "md", "lg", "xl"],
    },
    active: {
      control: "inline-radio",
      options: [true, false],
    },
  },
};

export const Default = {
  args: {
    label: "Button",
    intent: "primary",
    size: "md",
    active: false,
  },
};
export const navBtn = {
  args: {
    label: "Button",
    intent: "navBtn",
    size: "md",
    icon: <Logo className="group-hover:fill-accent transition-all" />,
    active: false,
  },
};
export const backBtn = {
  args: {
    label: "Button",
    intent: "backBtn",
    size: "md",
    icon: (
      <BackArrow className="group-hover:fill-accent group-hover:stroke-accent transition-all" />
    ),
    active: false,
  },
};
