import { useState } from "react";
import { FaTimes } from "react-icons/fa";
export default function SearchBar({ setInputText, inputText }) {
  const [showClose, setShowClose] = useState("disable_close");
  return (
    <div className="search_bar">
      <input
        className="search_space"
        value={inputText}
        onFocus={() => setShowClose("active_close")}
        onBlur={() => setShowClose("disable_close")}
        onChange={(event) => {
          setInputText(event.target.value);
        }}
      />
      <FaTimes className={showClose} onClick={() => setInputText("")} />
    </div>
  );
}
