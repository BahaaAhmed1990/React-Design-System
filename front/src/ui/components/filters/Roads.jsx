import { ImRoad } from "react-icons/im";
import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";

export default function Roads() {
  const { filtersData } = interfaceData;
  function handleClick() {
    console.log("roads click");
  }
  return (
    <Button
      label={filtersData[3].title}
      intent="navBtn"
      size="md"
      icon={<ImRoad />}
      handleClick={() => handleClick()}
    />
  );
}
