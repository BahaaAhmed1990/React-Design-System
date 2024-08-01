import { FaHospitalSymbol } from "react-icons/fa";
import { interfaceData } from "../../../data";
import { Button } from "../../primitives/Button";

export default function Hospitals() {
  const { filtersData } = interfaceData;
  function handleClick() {
    console.log("hospitals click");
  }
  return (
    <Button
      label={filtersData[2].title}
      intent="navBtn"
      size="md"
      icon={<FaHospitalSymbol />}
      handleClick={() => handleClick()}
    />
  );
}
