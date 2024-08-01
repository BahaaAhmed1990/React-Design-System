import { Button } from "../../primitives/Button";
import { interfaceData } from "../../../data";
import { BsFullscreen } from "react-icons/bs";

export default function Sales() {
  const { menuData } = interfaceData;
  function handleClick() {
    console.log("sales clicked");
  }
  return (
    <Button
      label={menuData[2].title}
      intent="navBtn"
      size="md"
      icon={<BsFullscreen />}
      handleClick={() => handleClick()}
    />
  );
}
