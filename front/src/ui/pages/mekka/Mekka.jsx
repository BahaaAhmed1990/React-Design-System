// import { interfaceData } from "../../../data/index";

import { FiChevronLeft } from "react-icons/fi";
import Interface from "../../components/interface";
import Header from "../../components/interface/Header";
import { Button } from "../../primitives/Button";
import ImgView from "../../primitives/ImgView";
import Filters from "./Filters";
import Body from "../../components/interface/Body";
import Footer from "../../components/interface/Footer";
import logo from "../../../assets/logo.png";
import Menu from "./Menu";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";

export default function Mekka() {
  const { theme } = useContext(GlobalContext);
  return (
    <div className={theme === "dark" ? "theme-dark" : null}>
      <Interface>
        <Header>
          {/* logo and route links */}
          <div className="flex justify-center items-center">
            <ImgView src={logo} intent="logo" />
            <Button
              intent="backBtn"
              size="md"
              icon={<FiChevronLeft size={24} />}
              label="Back"
            />
          </div>
          {/* filters */}
          {/* {filtersData && ( */}
          <div className="flex justify-center items-center">
            <Filters />
          </div>
          {/* )} */}

          {/* menu */}
          {/* {menuData && ( */}
          <div className="flex justify-center items-center">
            <Menu />
          </div>
          {/* )} */}
        </Header>
        <Body />
        <Footer />
      </Interface>
    </div>
  );
}
