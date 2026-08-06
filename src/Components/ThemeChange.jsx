import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function ThemeChange() {
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    setDark(!dark);
    document.body.classList.toggle("light");
  }
  useEffect(() => localStorage.setItem("dark", JSON.stringify(dark)), [dark]);
  return (
    <>
      <FaMoon
        className={dark ? "moon_icon" : "icon_hide"}
        onClick={() => toggleTheme()}
      />
      <FaSun
        className={!dark ? "sun_icon" : "icon_hide"}
        onClick={() => toggleTheme()}
      />
    </>
  );
}
