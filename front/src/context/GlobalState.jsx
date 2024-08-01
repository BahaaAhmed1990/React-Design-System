import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const GlobalContext = createContext();

export default function GlobalState({ children }) {
  const [theme, setTheme] = useState("");
  const [fullScreen, setFullScreen] = useState(false);

  useEffect(() => {
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  }, [theme]);

  useEffect(() => {
    document.fullscreenElement ? setFullScreen(true) : setFullScreen(false);
    // console.log(document.fullscreenElement);
    document.addEventListener("fullscreenchange", (e) => {
      console.log("full screen change");
      document.fullscreenElement ? setFullScreen(true) : setFullScreen(false);
    });
  }, []);

  // console.log("theme", theme);
  console.log("fullscreen", fullScreen);

  return (
    <GlobalContext.Provider
      value={{
        theme,
        setTheme,
        fullScreen,
        setFullScreen,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
