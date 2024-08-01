import { interfaceData } from "../../../data";
import NavLink from "../../primitives/NavLink";
import { IoInvertModeSharp } from "react-icons/io5";

export default function Mode() {
  const { menuData } = interfaceData;

  return (
    <NavLink
      intent="iconLink"
      label={menuData[3].title}
      size="sm"
      icon={<IoInvertModeSharp />}
    />
  );
}
