import FullScreen from "../../components/menu/FullScreen";
import Sales from "../../components/menu/Sales";
import Mode from "../../components/menu/Mode";
import Language from "../../components/menu/Language";
import Arabic from "../../components/menu/Arabic";
import English from "../../components/menu/English";
import Light from "../../components/menu/Light";
import Dark from "../../components/menu/Dark";

export default function Menu() {
  return (
    <ul className="flex justify-between items-center text-slate-300 gap-3">
      {/* FullScreen */}
      <li>
        <FullScreen />
      </li>
      {/* Language */}
      <div className="realtive w-[82px] group">
        <Language />
        <ul className="absolute px-1 bg-brand hidden w-[82px] group-hover:block">
          <Arabic />
          <English />
        </ul>
      </div>
      {/* Sales */}
      <li>
        <Sales />
      </li>
      {/* theme */}
      <div className="realtive w-[82px] group">
        <Mode />
        <ul className="absolute px-1 bg-brand hidden w-[82px] group-hover:block">
          <Light />
          <Dark />
        </ul>
      </div>
    </ul>
  );
}
