import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
export default function Layout() {
  return (
    <div className="homepage_box">
      <Header />
      <Outlet />
    </div>
  );
}
