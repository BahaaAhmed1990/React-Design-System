import React from "react";
import ImgView from "../../primitives/ImgView";
import img from "../../../assets/logo.png";
import { Button } from "../../primitives/Button";
import { FiChevronLeft } from "react-icons/fi";
import Filters from "../Filters";
import { filtersData } from "../../../data/filters";
import { menuData } from "../../../data/menu";
import Menu from "../menu/Menu";

export default function Header() {
  return (
    <div className="grow bg-brand rounded-lg flex justify-between items-center max-h-[70px] px-3">
      {/* logo and route links */}
      <div className="flex justify-center items-center">
        <ImgView src={img} intent="logo" />
        <Button
          intent="backBtn"
          size="md"
          icon={<FiChevronLeft size={24} />}
          label="Back"
        />
      </div>
      {/* filters */}
      <div className="flex justify-center items-center">
        <Filters filtersData={filtersData} />
      </div>
      {/* menu */}
      <div className="flex justify-center items-center">
        <Menu menuData={menuData}/>
      </div>
    </div>
  );
}
