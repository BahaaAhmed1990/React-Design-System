import { Button } from "../../primitives/Button";
import { interfaceData } from "../../../data";
import { BsFullscreen, BsFullscreenExit } from "react-icons/bs";
import { useContext } from "react";
import { GlobalContext } from "../../../context/GlobalState";
import { useTranslation } from "react-i18next";

export default function FullScreen() {
  const { menuData } = interfaceData;
  const { i18n, t } = useTranslation();
  const { fullScreen, setFullScreen } = useContext(GlobalContext);

  function handleClick() {
    console.log("fullscreen clicked");
    fullScreen
      ? document.exitFullscreen()
      : document.documentElement.requestFullscreen();
    setFullScreen(!fullScreen);
  }
  return (
    <Button
      label={fullScreen ? t("exitFullScreen") : t("fullScreen")}
      intent="navBtn"
      size="md"
      icon={fullScreen ? <BsFullscreenExit /> : <BsFullscreen />}
      active={fullScreen ? true : false}
      handleClick={() => handleClick()}
    />
  );
}
