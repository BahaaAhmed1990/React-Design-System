import { useContext } from "react";
import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";
import { GlobalContext } from "../../../context/GlobalState";

export default function Light() {
  const { menuData } = interfaceData;
  const { theme, setTheme } = useContext(GlobalContext);
  function handleClick() {
    console.log("light clicked");
    localStorage.setItem("theme", "light");
    setTheme("light");
  }

  return (
    <Button
      label={menuData[3].children[1].title}
      size={"full"}
      intent="primary"
      handleClick={() => handleClick()}
      active={theme === "light" ? true : false}
    />
  );
}
