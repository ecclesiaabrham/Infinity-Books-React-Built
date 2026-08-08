import { FaHeart, FaStar, FaBookmark, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import { BookContext } from "../context/BookContext";
import SearchBar from "./SeachBar";
import ThemeChange from "./ThemeChange";

export default function Header() {
  const { setInputText, inputText, like, favorite, bookmark } =
    useContext(BookContext);
  const [active, setActive] = useState("home");

  return (
    <div className="header_container">
      <div className="header">
        <h1 className="logo">Infinity Books</h1>
        <SearchBar setInputText={setInputText} inputText={inputText} />
        <ThemeChange />
        <div className="reaction_icon">
          <div className="icon_box">
            <Link to="/">
              <FaHome
                className={active == "home" ? "fa_icon_active" : "fa_icon"}
                onClick={() => setActive("home")}
              />
            </Link>
            <span className="tooltip_home">Home</span>
          </div>
          <div className="icon_box">
            <Link to="like">
              <FaHeart
                className={active === "like" ? "fa_icon_active" : "fa_icon"}
                onClick={() => setActive("like")}
              />
              {like.length !== 0 && (
                <span className="number">{like.length}</span>
              )}
            </Link>
            <span className="tooltip_like">Likes</span>
          </div>
          <div className="icon_box">
            <Link to="favourite">
              <FaStar
                className={
                  active === "favourite" ? "fa_icon_active" : "fa_icon"
                }
                onClick={() => setActive("favourite")}
              />
              {favorite.length !== 0 && (
                <span className="number">{favorite.length}</span>
              )}
            </Link>
            <span className="tooltip_favorite">Favourites</span>
          </div>
          <div className="icon_box">
            <Link to="bookmark">
              <FaBookmark
                className={active === "bookmark" ? "fa_icon_active" : "fa_icon"}
                onClick={() => setActive("bookmark")}
              />

              {bookmark.length !== 0 && (
                <span className="number">{bookmark.length}</span>
              )}
            </Link>
            <span className="tooltip_bookmark">Bookmarks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
