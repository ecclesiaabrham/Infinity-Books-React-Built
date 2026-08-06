import { FaMoon, FaSun } from "react-icons/fa";
import { useState, useEffect } from "react";
export default function ThemeChange() {
  const [dark, setDark] = useState(() => {
    const savedTheme = localStorage.getItem("dark");

    return savedTheme ? JSON.parse(savedTheme) : true;
  });

  function toggleTheme() {
    setDark((prev) => !prev);
  }
  useEffect(() => {
    document.body.classList.toggle("light", !dark);
    localStorage.setItem("dark", JSON.stringify(dark));
  }, [dark]);
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
