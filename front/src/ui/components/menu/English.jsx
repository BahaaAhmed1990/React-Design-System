import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";

export default function English() {
  const { menuData } = interfaceData;
  function handleClick() {
    console.log("En clicked");
  }
  return (
    <Button
      label={menuData[1].children[1].title}
      size={"full"}
      intent="primary"
      handleClick={() => handleClick()}
    />
  );
}
