import ImgView from "./ImgView";
import src from "../../assets/logo.png";
export default {
  title: "Primitives/ImgView",
  component: ImgView,
  parameters: {
    layout: "centered",
  },
  argTypes: {
    intent: {
      control: "select",
      options: ["logo"],
    },
  },
};

export const Default = {
  args: {
    intent: "logo",
    src: src,
  },
};
