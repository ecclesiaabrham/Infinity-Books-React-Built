import { FaHeart, FaStar, FaBookmark, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Header.css";
export default function Header() {
  const [active, setActive] = useState("home");

  return (
    <div className="header_container">
      <div className="header">
        <h1 className="logo">Infinity Books</h1>
        <input className="search_space" />
        <div className="reaction_icon">
          <div className="icon_box">
            <Link to="/">
              <FaHome
                className={active == "home" ? "fa_icon_active" : "fa_icon"}
                onClick={() => setActive("home")}
              />
            </Link>
            <span className="tooltip">Home</span>
          </div>
          <div className="icon_box">
            <Link to="like">
              <FaHeart
                className={active == "like" ? "fa_icon_active" : "fa_icon"}
                onClick={() => setActive("like")}
              />
            </Link>
            <span className="tooltip">Likes</span>
          </div>
          <div className="icon_box">
            <Link to="favourite">
              <FaStar
                className={active == "favourite" ? "fa_icon_active" : "fa_icon"}
                onClick={() => setActive("favourite")}
              />
            </Link>
            <span className="tooltip">Favourites</span>
          </div>
          <div className="icon_box">
            <Link to="bookmark">
              <FaBookmark
                className={active == "bookmark" ? "fa_icon_active" : "fa_icon"}
                onClick={() => setActive("bookmark")}
              />
            </Link>
            <span className="tooltip">Bookmarks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
