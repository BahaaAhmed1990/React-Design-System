import { Button } from "../../primitives/Button";
import { interfaceData } from "../../../data";
import { useTranslation } from "react-i18next";
export default function Arabic() {
  const { menuData } = interfaceData;
  const { i18n, t } = useTranslation();
  function handleClick() {
    console.log("Ar clicked");
    i18n.changeLanguage("ar");
  }
  return (
    <Button
      label={menuData[1].children[0].title}
      size={"full"}
      intent="primary"
      handleClick={() => handleClick()}
    />
  );
}
