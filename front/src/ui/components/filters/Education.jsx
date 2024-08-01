import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";
import { RiGraduationCapFill } from "react-icons/ri";

export default function Education() {
  const { filtersData } = interfaceData;
  function handleClick() {
    console.log("education click");
  }
  return (
    <Button
      label={filtersData[1].title}
      intent="navBtn"
      size="md"
      icon={<RiGraduationCapFill />}
      handleClick={() => handleClick()}
    />
  );
}
