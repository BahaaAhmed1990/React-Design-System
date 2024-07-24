import { BsFullscreen } from "react-icons/bs";
import { GrLanguage } from "react-icons/gr";
import { FaPhone } from "react-icons/fa6";
export const menuData = [
  {
    title: "full screen",
    id:1,
    icon: <BsFullscreen />,
  },
  {
    id:2,
    title: "language",
    icon: <GrLanguage />,
    children: [
      {
        id:21,
        title: "AR",
      },
      {
        id:22,
        title: "EN",
      },
    ],
  },
  {
    id:3,
    title: "sales",
    icon: <FaPhone />,
  },
];
