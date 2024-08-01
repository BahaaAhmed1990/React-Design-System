import { useContext } from "react";
import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";
import { GlobalContext } from "../../../context/GlobalState";

export default function Dark() {
  const { menuData } = interfaceData;
  const { theme, setTheme } = useContext(GlobalContext);

  function handleClick() {
    console.log("dark clicked");
    setTheme("dark");
    localStorage.setItem("theme", "dark");
  }
  return (
    <Button
      label={menuData[3].children[0].title}
      size={"full"}
      intent="primary"
      handleClick={() => handleClick()}
      active={theme === "dark" ? true : false}
    />
  );
}
