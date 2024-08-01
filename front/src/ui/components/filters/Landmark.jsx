import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";
import { RiAccountBoxFill } from "react-icons/ri";

export default function Landmark() {
  const { filtersData } = interfaceData;
  function handleClick() {
    console.log("landmark click");
  }
  return (
    <Button
      label={filtersData[1].title}
      intent="navBtn"
      size="md"
      icon={<RiAccountBoxFill />}
      handleClick={() => handleClick()}
    />
  );
}
