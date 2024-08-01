import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";
import { PiMosque } from "react-icons/pi";

export default function Mosques() {
  const { filtersData } = interfaceData;
  function handleClick() {
    console.log("education click");
  }
  return (
    <Button
      label={filtersData[1].title}
      intent="navBtn"
      size="md"
      icon={<PiMosque />}
      handleClick={() => handleClick()}
    />
  );
}
