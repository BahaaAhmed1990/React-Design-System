import Education from "../../components/filters/Education";
import Hospitals from "../../components/filters/Hospitals";
import Mosques from "../../components/filters/Mosques";
import Roads from "../../components/filters/Roads";
import Landmark from "../../components/filters/Landmark";
export default function Filters() {
  return (
    <>
      <Landmark />
      <Education />
      <Hospitals />
      <Roads />
      <Mosques />
    </>
  );
}
