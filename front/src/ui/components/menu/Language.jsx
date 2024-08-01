import { interfaceData } from "../../../data";
import { GrLanguage } from "react-icons/gr";
import NavLink from "../../primitives/NavLink";

export default function Language() {
  const { menuData } = interfaceData;

  return (
    <NavLink
      intent="iconLink"
      label={menuData[1].title}
      size="sm"
      icon={<GrLanguage />}
    />
  );
}
