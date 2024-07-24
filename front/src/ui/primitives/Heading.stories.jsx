import Heading from "./Heading";

export default {
  title: "Primitives/Heading",
  component: Heading,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    intent: {
      control: "inline-radio",
      options: ["primary", "secondary"],
    },
  },
};
export const Default = {
  args: {
    content: "Heading",
    intent: "primary",
    size: "lg",
  },
};
