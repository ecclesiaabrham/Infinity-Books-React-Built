import { FaHeart, FaStar, FaBookmark, FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useRef } from "react";
import "./Header.css";
export default function Header() {
  const homeRef = useRef(null);
  const likeRef = useRef(null);
  const favouriteRef = useRef(null);
  const bookmarkRef = useRef(null);

  return (
    <div className="header_container">
      <div className="header">
        <h1 className="logo">Infinity Books</h1>
        <input className="search_space" />
        <div className="reaction_icon">
          <div className="icon_box">
            <Link to="home">
              <FaHome class="fa_icon" ref={homeRef} />
            </Link>
            <span className="tooltip">Home</span>
          </div>
          <div className="icon_box">
            <Link to="like">
              <FaHeart class="fa_icon" ref={likeRef} />
            </Link>
            <span className="tooltip">Likes</span>
          </div>
          <div className="icon_box">
            <Link to="favourite">
              <FaStar class="fa_icon" ref={favouriteRef} />
            </Link>
            <span className="tooltip">Favourites</span>
          </div>
          <div className="icon_box">
            <Link to="bookmark">
              <FaBookmark class="fa_icon" ref={bookmarkRef} />
            </Link>
            <span className="tooltip">Bookmarks</span>
          </div>
        </div>
      </div>
    </div>
  );
}
