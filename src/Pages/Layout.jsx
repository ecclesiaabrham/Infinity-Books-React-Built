import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
export default function Layout({ setInputText, inputText }) {
  return (
    <div className="homepage_box">
      <Header setInputText={setInputText} inputText={inputText} />
      <Outlet />
    </div>
  );
}
